import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/pnu-ops" : undefined,
  assetPrefix: isProd ? "/pnu-ops/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
