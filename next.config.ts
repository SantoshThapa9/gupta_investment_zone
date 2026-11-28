import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import type { NextConfig } from "next";

const nextConfig = (phase: string): NextConfig => ({
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next-prod",
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
});

export default nextConfig;
