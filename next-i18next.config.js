const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko', 'ja', 'zh', 'fr', 'id', 'fil'],
    localePath: path.resolve('./locales'),
  },
  reloadOnPrerender: process.env.NODE_ENV == 'development',
}
