module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        kanit: "Kanit, sans-serif",
        jost: "Jost, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
