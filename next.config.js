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
      'chito.ge',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
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
