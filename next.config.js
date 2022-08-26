const { withContentlayer } = require('next-contentlayer')
const { i18n } = require('./next-i18next.config')

module.exports = withContentlayer()({
  i18n,
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'fosshost.org',
      'owo.whats-th.is',
      'images.unsplash.com',
      'yuri.might-be-super.fun',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: { images: { allowFutureImage: true } },
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        // 'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat', // Must be below test-utils
        'react/jsx-runtime.js': require.resolve('preact/jsx-runtime'),
      })
    }

    return config
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'max-age=1, stale-while-revalidate=299, stale-if-error=86400',
          },
        ],
      },
      {
        source: '/(.*).(woff2?|png|mp4|jpe?g|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
})
