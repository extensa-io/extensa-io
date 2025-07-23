import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'extensa.io',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig