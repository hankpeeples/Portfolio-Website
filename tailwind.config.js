/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: {
  //   enabled: true,
  //   content: ["./**/*.html"],
  // },
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html",
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#78FECF",
        secondary: "#F7DD72",
        accent: "#D36582",
        background: "#2f2f2f",
      },
    },
    fontFamily: {
      proxima: ["ProximaReg", "sans-serif"],
      proximaBold: ["ProximaBold", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
