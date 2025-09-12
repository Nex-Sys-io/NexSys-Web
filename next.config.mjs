/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['*'],
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // disable webpack cache in development to prevent cache warnings
      config.cache = false;
    }
    return config;
  },
  // disable Next.js cache in development
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

export default nextConfig;
