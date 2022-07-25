/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      },
      colors:{
        background: "#02050E",
        primary: "#1E50FF",
        card: "#272D37",
        "second-card": "#272D37",
        gray: "#ADB9C7"
      },
      gridTemplateColumns: {
        "card-top": "repeat(3, 498px)",
        "card-primary": "repeat(3, 384px)"
      }
    },
  },
  plugins: [],
}
