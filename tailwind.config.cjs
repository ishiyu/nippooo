/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/main/components/**/*.{vue,ts}',
    './src/main/containers/**/*.{vue,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
