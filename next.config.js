import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: true,
  poweredByHeader: false,
  cleanDistDir: true,
  cacheMaxMemorySize: 52428800, // 50MB Server RAM cache limit for stable shared hosting
  webpack: (config, { dev }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(process.cwd(), 'src'),
    };
    if (!dev) {
      config.cache = false; // Disable production disk cache to prevent stale chunk conflicts
    }
    return config;
  },
  turbopack: {},
  experimental: {
    agentUpgrade: "security",
    workerThreads: false,
    cpus: 1,
  },
  outputFileTracingRoot: process.cwd(),
  serverExternalPackages: ["mongoose"],
  reactStrictMode: true,
  distDir: process.env.NEXT_DIST_DIR || '.next',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },

      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'mewarhitech.com',
          },
        ],
        destination: 'https://www.mewarhitech.com/:path*',
        permanent: true,
      },
      {
        source: '/projects/stationery-projects',
        destination: '/projects/stationary-crushing-plants',
        permanent: true,
      },
      {
        source: '/stationery-projects',
        destination: '/projects/stationary-crushing-plants',
        permanent: true,
      },
      {
        source: '/stationary-crushing-plants',
        destination: '/projects/stationary-crushing-plants',
        permanent: true,
      },
      {
        source: '/industries/sand-gravel',
        destination: '/industries/m-sand',
        permanent: true,
      },
      {
        source: '/products/stone-crusher',
        destination: '/products/jaw-crusher',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/3dmodel/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/uploads/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
