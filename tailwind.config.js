/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        footerBg: "#51536C",
      },
      backgroundImage: {
        linearGradient: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)"
      },
      boxShadow: {
        cardShadow: "0px 4px 4px 0px #00000040"
      }

    },
  },
  plugins: [],
}