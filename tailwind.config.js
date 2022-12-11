/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/containers/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4472F5',
      },
      maxWidth: {
        container: '1280px',
      },
      fontFamily: {
        body: ['"Exo"', 'serif']
      },
      
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.app-content-wrap': {
          zIndex: theme('zIndex.10'),
          maxWidth: theme('maxWidth.container'),
          width: theme('width.full'),
          margin: '0 auto',
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
        }
      })
    })
  ],
}
