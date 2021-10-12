const { withPlaiceholder } = require('@plaiceholder/next')

module.exports = withPlaiceholder({
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'fosshost.org'],
  },
})
