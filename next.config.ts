import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [new URL('https://i.ibb.co/**') , new URL('https://nurturingstars.org/**')],
  },
}

export default nextConfig;
