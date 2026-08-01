import type { NextConfig } from "next";

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
   * Campaign landing-page aliases.
   *
   * The Google Ads briefs specify short root URLs. Where an equivalent page
   * already exists, we redirect rather than duplicate — two pages targeting the
   * same intent would cannibalise each other. Ad final URLs handle a 301 fine.
   */
  async redirects() {
    return [
      {
        source: "/explosion-proof-vacuums",
        destination: "/products/explosion-proof-vacuums",
        permanent: true,
      },
      {
        source: "/air-operated-vacuums",
        destination: "/products/pneumatic-vacuums",
        permanent: true,
      },
      {
        source: "/powder-coating-dust-recovery",
        destination: "/applications/powder-coating",
        permanent: true,
      },
      {
        source: "/metal-dust-recovery",
        destination: "/materials/combustible-metal-dust",
        permanent: true,
      },
      {
        source: "/compliance",
        destination: "/hazardous-locations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
