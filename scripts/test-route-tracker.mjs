import { JSDOM } from "jsdom";

/* Mirrors the effect body of route-change-tracker.tsx so the three behaviours
   that matter can be exercised: first-run skip, title-settle timing, and the
   timeout backstop. */
const TITLE_SETTLE_TIMEOUT_MS = 400;

function makeTracker(win, doc, observeHeadInstead) {
  let isFirstRun = true;
  let previousUrl = "";
  const pushes = [];

  function onRouteChange() {
    if (isFirstRun) {
      isFirstRun = false;
      previousUrl = win.location.href;
      return;
    }
    const titleBefore = doc.title;
    const referrer = previousUrl;
    let done = false;
    let observer, timeout;

    const fire = () => {
      if (done) return;
      done = true;
      observer?.disconnect();
      win.clearTimeout(timeout);
      const { pathname, search, href } = win.location;
      pushes.push({
        event: "spa_pageview",
        page_path: pathname + search,
        page_location: href,
        page_title: doc.title,
        page_referrer: referrer,
      });
      previousUrl = href;
    };

    observer = new win.MutationObserver(() => {
      if (doc.title !== titleBefore) fire();
    });
    const target = observeHeadInstead ? doc.head : doc.querySelector("title");
    if (target) observer.observe(target, { childList: true, characterData: true, subtree: true });
    timeout = win.setTimeout(fire, TITLE_SETTLE_TIMEOUT_MS);
  }
  return { onRouteChange, pushes };
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function scenario(name, { replaceTitleNode, sameTitle, observeHead }) {
  const dom = new JSDOM(`<!DOCTYPE html><html><head><title>Get a Quote | PrestiVac</title></head><body></body></html>`,
    { url: "https://prestivac.com/get-a-quote" });
  const { window: win } = dom;
  const doc = win.document;
  const t = makeTracker(win, doc, observeHead);

  t.onRouteChange();                       // mount / first run
  dom.reconfigure({ url: "https://prestivac.com/thank-you/quote?ref=PV-Q-1" });
  t.onRouteChange();                       // navigation

  await sleep(30);
  const newTitle = sameTitle ? "Get a Quote | PrestiVac" : "Thank you | PrestiVac";
  if (replaceTitleNode) {
    doc.querySelector("title")?.remove();
    const el = doc.createElement("title");
    el.textContent = newTitle;
    doc.head.appendChild(el);
  } else {
    doc.title = newTitle;
  }
  await sleep(600);

  const p = t.pushes;
  console.log(`\n--- ${name}`);
  console.log(`    pushes: ${p.length} (expect exactly 1)`);
  if (p[0]) {
    console.log(`    page_title    : ${p[0].page_title}`);
    console.log(`    page_path     : ${p[0].page_path}`);
    console.log(`    page_referrer : ${p[0].page_referrer}`);
    const stale = p[0].page_title.startsWith("Get a Quote") && !sameTitle;
    console.log(`    STALE TITLE?  : ${stale ? "YES — BUG" : "no"}`);
  }
  dom.window.close();
  return p;
}

await scenario("A. title mutated in place, observing <title>", { observeHead: false });
await scenario("B. title NODE REPLACED, observing <title>",    { replaceTitleNode: true, observeHead: false });
await scenario("C. title NODE REPLACED, observing <head>",     { replaceTitleNode: true, observeHead: true });
await scenario("D. two routes share a title (timeout path)",   { sameTitle: true, observeHead: true });
