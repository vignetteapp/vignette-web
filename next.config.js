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
    headers: [
      {
        source: '/fonts/Inter-roman.var.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=1, stale-while-revalidate=59',
          },
        ],
      },
    ],
  },
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
})
