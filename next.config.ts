import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? "/sebastian-v.github.io" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/sebastian-v.github.io/" : "",
  reactCompiler: true,
};

export default nextConfig;
