/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./page/*.{html,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

