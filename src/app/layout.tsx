import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import { FloatingSupport } from "@/components/layout/floating-support";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { MotionProvider } from "@/components/motion-provider";
import { DEFAULT_LOCALE, pairedAlternates } from "@/lib/i18n";
import { site } from "@/lib/site";

import "./globals.css";

/**
 * Google Tag Manager container.
 *
 * Overridable via NEXT_PUBLIC_GTM_ID so the cloned site can use its own container
 * and local development can opt out entirely by setting it empty. Falls back to
 * the production container when unset.
 *
 * strategy="beforeInteractive" is deliberate: it renders the loader into the
 * SERVER HTML head, which is what Google asks for. With "afterInteractive" the
 * loader is injected only after hydration, so it is absent from the initial
 * document and never runs for a visitor who does not hydrate.
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-KGJFZGS";

/* Self-hosted variable fonts (single woff2 each, no layout shift). */
const inter = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-inter",
});

const archivo = localFont({
  src: "../fonts/archivo-latin-wght-normal.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "industrial vacuum",
    "explosion proof vacuum",
    "combustible dust",
    "HEPA industrial vacuum",
    "hazardous dust recovery",
    "PrestiVac",
  ],
  alternates: { canonical: "/", languages: pairedAlternates("/") },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "PrestiVac explosion-proof industrial vacuum systems in a manufacturing facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#05080c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={DEFAULT_LOCALE.code} className={`${inter.variable} ${archivo.variable}`}>
      <head>
        {GTM_ID && (
          <Script
            id="gtm-loader"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body>
        {/* GTM noscript fallback — must be the first thing inside <body>. */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-white px-4 py-2 text-sm font-semibold text-graphite-950 shadow-panel transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          {/* Flex column so page heroes can fill the first viewport and the
              footer never floats on short pages. */}
          <main id="main" className="flex min-h-svh flex-col">
            {children}
          </main>
          <Footer />
          <FloatingSupport />
        </MotionProvider>
      </body>
    </html>
  );
}
