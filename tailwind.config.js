/* eslint-disable @typescript-eslint/no-var-requires */
const spacing = require('./src/styles/theme/common/spacing.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing,
      minWidth: spacing,
      maxWidth: spacing,
      minHeight: spacing,
      maxHeight: spacing,
      fontSize: {
        '10xl': 'var(--fonts-sizes-10xl)'
      },
      screens: { '3xl': '1920px' },
      colors: {
        primary: {
          500: 'var(--colors-primary-500)',
          800: 'var(--colors-primary-800)'
        },
        secondary: 'var(--colors-secondary)',
        tertiary: 'var(--colors-tertiary)'
      }
    }
  }
}
