module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    extend: {
      colors: {
        blue: {
          DEFAULT: "#0c2340",
        },
      },
      fontSize: {
        "10xl": "10rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
