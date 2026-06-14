import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [new URL(`${process.env.NEXT_PUBLIC_CDN_URL}/**`)],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json',
  },
});

export default withNextIntl(nextConfig);
