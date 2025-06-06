import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    domains: [
      'upload.wikimedia.org',
      'images.unsplash.com',
      'pinepointtech.com',
      'images.pexels.com',
      'plus.unsplash.com'
    ]
  },
};

export default nextConfig;
