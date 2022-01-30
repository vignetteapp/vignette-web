module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      spartan: ['Spartan', 'sans-serif'], // fix for infinate recursion
      inter: [
        "'Inter var'",
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      screens: {
        xxs: '281px',
        xs: '532px',
        '3xl': '1792px',
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
        primary: { DEFAULT: '#323232', dark: '#F8F8F8' },
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
    },
  },
  variants: {
    extend: { backgroundImage: ['dark'] },
  },
  plugins: [],
}
