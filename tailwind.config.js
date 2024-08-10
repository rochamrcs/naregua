/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1C1F",
        secondary: "#D49929",
        black: "#2B2B2B"
      },
      fontFamily: {
        popBold: ["Poppins_Bold", "sans-serif"],
        popMedium: ["Poppins_Medium", "sans-serif"],
        popRegular: ["Poppins_Regular", "sans-serif"],
        popSemibold: ["Poppins_SemiBold", "sans-serif"],
        popThin: ["Poppins_Thin", "sans-serif"]
      },
    },
  },
  plugins: [],
}

