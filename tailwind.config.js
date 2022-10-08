/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xxs: '350px',
      xs: '500px',
      ...defaultTheme.screens,
    },

    extend: {
      fontFamily: {
        inter: [
          "'Pretendard Std'",
          "'Pretendard'",
          "'Pretendard JP'",
          "'Noto Sans SC'",
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        fuschia: {
          100: '#BE58CB',
          90: '#BE58CB',
          80: '#F178B6',
          60: '#FCDDEC',
        },
        iris: {
          100: '#5D5FEF',
          80: '#7879F1',
          70: '#6A99DD',
          60: '#A5A6F6',
        },
        deepFuscia: '#BE58CB',
        pinkRed: {
          DEFAULT: '#f10e5a',
          50: '#fee7ef',
          100: '#fbb7ce',
          200: '#f887ad',
          300: '#f43e7b',
          400: '#f2266b',
          500: '#f10e5a',
          600: '#d90d51',
          700: '#c10b48',
          800: '#a90a3f',
          900: '#910836',
        },
        cornflowerBlue: '#6A99DD',
        primary: { DEFAULT: '#272727', dark: '#F8F8F8' },
        secondary: { DEFAULT: '#444444', dark: '#DADADA' },
        subtle: { DEFAULT: '#777777', dark: '#BBBBBB' },
      },
      letterSpacing: {
        tightest: '-.1em',
      },
      dropShadow: {
        footer: '0 10px 10px rgba(0, 0, 0, 0.25)',
      },
      scale: {
        60: 0.6,
        80: 0.8,
      },
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },

      typography: (theme) => ({
        lg: {
          css: {
            h1: {
              marginBottom: '0.6rem',
            },
            h2: {
              marginBottom: '0.5rem',
            },
            h3: {
              marginBottom: '0.4rem',
            },
            ol: {
              li: {
                '&::marker': { color: theme('colors.gray.600') },
              },
            },
            ul: {
              li: {
                '&::marker': {
                  color: theme('colors.gray.600'),
                  marginLeft: '0rem',
                },
              },
            },
            hr: {
              marginTop: '3rem',
              marginBottom: '3rem',
              marginLeft: '-1rem',

              marginRight: '-1rem',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.200'),
            ul: {
              li: {
                '&::marker': {
                  color: theme('colors.gray.300'),
                },
              },
            },
          },
        },
      }),
    },
  },
  corePlugins: {
    container: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '80rem',
          paddingRight: '1.5rem',
          paddingLeft: '1.5rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        '.gradient-primary': {
          '--tw-gradient-stops':
            '#f10e5a,#f1106c,#ee1b7e,#e9288f,#e235a0,#d841af,#cc4dbe,#be58cb',
        },
        '.gradient-secondary': {
          '--tw-gradient-stops':
            '#6a99dd,#6f93e0,#788ce2,#8484e2,#927ce0,#a071db,#af66d4,#be58cb',
        },
      })
    },
  ],
}
