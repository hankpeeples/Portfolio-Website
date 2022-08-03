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
        backgroundAlt: "#8B9EB7",
      },
      boxShadow: {
        btn: "2px 2px 6px",
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
