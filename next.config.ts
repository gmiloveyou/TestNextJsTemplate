import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    sri: {
      algorithm: 'sha384', // or 'sha384' or 'sha512'
    },
  },
  output: 'export',

};

export default nextConfig;
