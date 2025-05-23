
/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const API_URL = isDev
  ? process.env.NEXT_PUBLIC_BASE_STAGING_URL
  : process.env.NEXT_PUBLIC_BASE_LIVE_URL;

const { hostname } = new URL(`${API_URL}`);
const nextConfig = {
  images: {
    domains: [
      hostname,
      ...(isDev ? ['localhost'] : []),
    ], 
  },
};

export default nextConfig;
