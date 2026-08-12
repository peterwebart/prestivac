import type { NextConfig } from "next";

import { LEGACY_REDIRECTS } from "./src/lib/redirects";

/**
 * App-level security headers. TLS/HSTS termination is handled by the
 * reverse proxy (Coolify/Traefik) per the infrastructure contract.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    /* Every quality used via next/image must be declared (required in Next 16,
       warned in 15.5). 75 = default, 80 = hero background. */
    qualities: [75, 80],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  /**
   * Legacy URL redirects.
   *
   * Campaign aliases plus the full map built from the Search Console
   * "Not found (404)" report. See src/lib/redirects.ts for the strategy and
   * per-URL reasoning.
   */
  async redirects() {
    return LEGACY_REDIRECTS;
  },
};

export default nextConfig;
