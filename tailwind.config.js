/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        popBold: ["Poppins_Bold", "sans-serif"],
        popMedium: ["Poppins_Medium", "sans-serif"],
        popRegular: ["Poppins_Regular", "sans-serif"],
        popSemibold: ["Poppins_SemiBold", "sans-serif"],
        popThin: ["Poppins_Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
}

