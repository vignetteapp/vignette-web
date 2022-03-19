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
          "'Inter var'",
          "'Pretendard Variable'",
          "'Noto Sans JP'",
          "'Noto Sans KR'",
          'Noto Sans SC',
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
        pinkRed: '#F10E5A',
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
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.006em' }],
        base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.011em' }],
        lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.0143em' }],
        xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.017em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.019em' }],
        '3xl': [
          '1.875rem',
          { lineHeight: '2.25rem', letterSpacing: '-0.021em' },
        ],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.022em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.022em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.022em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.0222em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.0223em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.0223em' }],
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
  plugins: [require('@tailwindcss/typography')],
}
