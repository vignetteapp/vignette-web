const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'ko',
      'ja',
      'zh-CN',
      'zh-TW',
      'th',
      'fr',
      'id',
      'fil',
      'it',
      'de',
      'vi',
      'ru',
      'uk',
      'pt',
      'nl',
    ],
    localePath: path.resolve('./locales'),
  },
  reloadOnPrerender: process.env.NODE_ENV == 'development',
}
