module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'fosshost.org'],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
}
