module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.css',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
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
        primary: '#323232',
        secondary: '#444444',
        subtle: '#777777',
      },
      backgroundImage: {
        'hero-pattern': 'url(public/images/background.svg)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        spartan: ['Spartan', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-.1em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
