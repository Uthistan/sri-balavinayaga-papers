import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 requires an explicit allowlist. 90 is for the logo: it sits on a
    // flat dark field, where re-encoding at the default 75 can leave visible
    // blotching around the mark.
    qualities: [75, 90],
  },
};

export default nextConfig;
