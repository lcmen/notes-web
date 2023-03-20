/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "layouts/**/*.html",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        mobile: "640px",
        desktop: "960px"
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      mobile: '640px',
      desktop: '1024px',
    },
  },
  plugins: [],
};
