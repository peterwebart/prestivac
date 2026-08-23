import { Droplet, Filter, Recycle, ShieldCheck } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

/**
 * Coolant and metalworking fluid recovery.
 *
 * Identified from the client taxonomy in docs/client-taxonomies: "Coolants" and
 * "Metal Working Fluids" were both listed as requested topics, and the
 * applications directory already carried "Oil & coolant recovery" and
 * "Chip & coolant separation" as items — both pointing at a product category
 * rather than at content. Same pattern as mercury: a real capability with a
 * generic destination.
 *
 * Integrity rules: no performance figures, no claim that any specific fluid is
 * or is not combustible, and the combustible-metal interaction is stated as a
 * question to settle by testing rather than as a rule.
 */
export const coolantRecoveryGuide: ApplicationGuideData = {
  slug: "coolant-recovery",
  title: "Coolant & Metalworking Fluid",
  titleAccent: "Recovery",
  categoryCrumb: { label: "Machining & Metalworking", anchor: "metalworking-machining" },
  seo: {
    title: "Coolant & Metalworking Fluid Recovery",
    description:
      "Recovering coolant, cutting oil and swarf from machine sumps. Why the chips in the fluid decide the method, and where the fluid can be reclaimed rather than dumped.",
  },
  tagline: "Recover the fluid. Separate the chips.",
  heroIntro:
    "Sump cleaning is one of the least popular jobs in a machine shop and one of the most consequential. The fluid degrades, the chips and fines settle into a sludge that pumps cannot shift, and the usual method — shovel, bucket and shop vacuum — puts an operator in contact with spent coolant and frequently damages the vacuum on the first job.",
  badges: [
    {
      icon: Droplet,
      title: "Liquid & Solids Together",
      detail: "Sump contents are fluid, chips and settled fines in one volume",
    },
    {
      icon: Recycle,
      title: "Reclaim Where Possible",
      detail: "Separated fluid can often return to service rather than to waste",
    },
    {
      icon: Filter,
      title: "Filtration Protects the Airpath",
      detail: "Liquid recovery uses separation and level control, not a dry medium",
    },
    {
      icon: ShieldCheck,
      title: "Reactive Metal Check First",
      detail: "Some metal fines react with water-based fluid — establish before recovering",
    },
  ],
  overview:
    "Metalworking fluid does not fail cleanly. It accumulates tramp oil on the surface, bacterial growth through the volume, and a bed of chips and fine swarf at the bottom that ordinary sump pumps ride over. By the time the coolant is visibly spent, the sump holds three different things — usable fluid, recoverable metal and unusable sludge — and the recovery method determines whether any of them are separated or all of them go to waste together.",
  capabilities: [
    {
      icon: Droplet,
      title: "Sump evacuation",
      detail:
        "Recovering the full volume including the settled bed, rather than skimming the fluid and leaving the sludge that caused the problem.",
    },
    {
      icon: Recycle,
      title: "Chip and fluid separation",
      detail:
        "Separating recoverable swarf from the fluid so the metal goes to reclaim and the fluid can be assessed for return to service.",
    },
    {
      icon: Filter,
      title: "Wet recovery configuration",
      detail:
        "Liquid recovery relies on separation and level control. A dry filter drawn into the liquid path blinds immediately and may never recover.",
    },
    {
      icon: ShieldCheck,
      title: "Machine-side cleanup",
      detail:
        "Way covers, chip conveyors, enclosure floors and coolant tanks — the places fluid and swarf collect between scheduled sump work.",
    },
  ],
  materialsHeading: "What comes out of a sump",
  materials: [
    "Water-soluble and semi-synthetic coolant",
    "Straight cutting and honing oil",
    "Tramp oil from way lube and hydraulics",
    "Steel and cast iron swarf",
    "Aluminium fines",
    "Grinding swarf and wheel debris",
    "Settled sludge and biomass",
  ],
  materialsNote: {
    text: "Where the fines are a reactive metal, whether the material can be safely handled wet is a property of that metal and is established by testing rather than assumed.",
    link: { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
  },
  challengesHeading: "Why sump cleaning goes wrong",
  challenges: [
    "The sludge is the point. Pumps move fluid and ride over the settled bed, so the material that degrades the next charge of coolant stays in the tank.",
    "A dry-configured vacuum drawn into liquid blinds its filter immediately, which is the most common way a general-purpose unit is written off on its first sump job.",
    "Spent coolant carries bacterial growth and tramp oil, so manual bailing is a skin and inhalation exposure as well as an unpleasant job.",
    "Mixing recovered fluid with dry-collected material produces a slurry that is harder to handle and impossible to reclaim.",
    "Grinding swarf holds fluid, so a container sized by volume becomes unmanageable by weight well before it looks full.",
    "Where the fines are a reactive metal, the water in a water-based fluid is a question to settle before recovery rather than during it.",
  ],
  whyHeading: "Why vacuum recovery",
  why: [
    "It removes the settled bed rather than skimming the surface, which is what actually extends the life of the next fluid charge.",
    "It keeps the operator out of contact with spent coolant and the biological load it carries.",
    "It separates chips from fluid, so recoverable metal goes to reclaim and the fluid can be assessed rather than dumped by default.",
    "It empties into sealed containers, so what leaves the machine is contained rather than carried across the shop in an open bucket.",
    "It turns sump cleaning into a scheduled task of predictable length rather than a job people defer.",
  ],
  benefits: [
    {
      title: "Fluid life",
      detail:
        "Removing the settled bed and tramp oil is what determines how long the next charge lasts. Skimming the top does not.",
    },
    {
      title: "Metal reclaim",
      detail:
        "Separated swarf has scrap value that a mixed sludge does not. The separation has to happen at recovery, not afterwards.",
    },
    {
      title: "Reduced exposure",
      detail:
        "Spent metalworking fluid carries bacterial growth. Vacuum recovery removes the hand contact that bailing requires.",
    },
    {
      title: "Predictable downtime",
      detail:
        "A machine out of service for sump cleaning is a scheduling problem. A method with a known duration is easier to plan around than one that depends on who is doing it.",
    },
  ],
  recommended: ["wet-dry-systems", "industrial-vacuums", "pneumatic-vacuums", "custom-engineered-systems"],
  setup: [
    {
      step: "Identify the fines",
      detail:
        "Steel and cast iron behave differently from aluminium, and reactive metals differently again. Where reactivity is uncertain, settle it before recovering rather than during.",
    },
    {
      step: "Confirm the fluid type",
      detail:
        "Water-soluble, semi-synthetic and straight oil differ in how they separate and in what the recovered fluid can be used for afterwards.",
    },
    {
      step: "Configure for wet recovery",
      detail:
        "Liquid recovery uses separation and level control. Ensure the dry filter is out of the liquid path — this is a configuration step, not an optional one.",
    },
    {
      step: "Size by weight, not volume",
      detail:
        "Fluid and swarf are dense. A container that is manageable full of dust is immovable full of sump contents, so drainage arrangements matter more than raw capacity.",
    },
    {
      step: "Decide the fluid's destination first",
      detail:
        "Whether recovered fluid returns to service or goes to waste changes how it is separated and stored. That decision belongs before the sump is opened.",
    },
  ],
  setupNote: {
    text: "Where the machine also produces combustible metal dust in dry operations, that is a separate specification with its own certification requirement — see ",
    link: { label: "selecting a vacuum for metal dust", href: "/guides/vacuum-for-metal-dust" },
    textAfter: ". Wet and dry recovery of the same metal should not share a container.",
  },
  faqs: [
    {
      question: "Can we use a shop vacuum for sump cleaning?",
      answer:
        "It is the most common way a general-purpose unit is destroyed. A dry-configured vacuum drawn into liquid blinds its filter immediately and may never recover its original performance. Wet recovery uses separation and level control instead of a filter medium.",
    },
    {
      question: "Can recovered coolant be reused?",
      answer:
        "Often, depending on the fluid, how far it has degraded and what it has picked up. The decision belongs before recovery, because whether the fluid is destined for return to service or for waste changes how it should be separated and stored.",
    },
    {
      question: "What about aluminium or reactive metal fines in a water-based coolant?",
      answer:
        "Whether a specific metal can be safely handled in a water-based fluid is a property of that metal, established by testing rather than assumed. Where reactivity is uncertain, settle it before recovering.",
    },
    {
      question: "Do we need an explosion-proof unit for coolant recovery?",
      answer:
        "That depends on the area classification assigned by your engineer, not on the fluid. Wet sump work in an unclassified area is a different specification from dry combustible metal dust recovery in a classified one — and the same machine is rarely right for both.",
    },
  ],
  relatedApplications: ["cnc-machining", "grinding-dust", "deburring", "spill-cleanup"],
  relatedResources: [
    { label: "Wet vs dry recovery", href: "/guides/wet-vs-dry-recovery" },
    { label: "Selecting for metal dust", href: "/guides/vacuum-for-metal-dust" },
    { label: "Wet & Dry Systems", href: "/products/wet-dry-systems" },
    { label: "Toxic liquid recovery", href: "/guides/toxic-liquid-recovery" },
    { label: "Metalworking industry", href: "/industries/metalworking" },
  ],
};
