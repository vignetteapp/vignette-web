const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'ko',
      'ja',
      'zh',
      'fr',
      'id',
      'fil',
      'ach',
      'de',
      'pt',
      'nl',
    ],
    localePath: path.resolve('./locales'),
  },
  reloadOnPrerender: process.env.NODE_ENV == 'development',
}
