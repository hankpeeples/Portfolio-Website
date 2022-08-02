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
    extend: {},
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
