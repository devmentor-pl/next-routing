// next.config.ts 

// import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
