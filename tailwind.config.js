const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      serif: ['"Zilla Slab"', ...defaultTheme.fontFamily.serif],
      headline: ['Zilla Slab Highlight'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
