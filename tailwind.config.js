module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        skin: {
          dark: "#DF9A80",
          medium: "#e4ad97",
          belowMedium: "#ecd9d1",
          aboveLight: "#ebcabe",
          light: "#FFF7F5",
          lightWithOpacity: "rgb(255,247,245,0.95)",
        },
        footer: {
          bluei: "#14A59F",
        },
      },
      screens: {
        smm: { max: "640px" },
        lgg: { max: "1023px" },
        mdd: { max: "768px" },
      },
      fontFamily: {
        montserrat: {
          normal: ["Montserrat", "sans-serif"],
        },
        playfare: {
          normal: ["Playfair Display", "serif"],
        },
      },
      keyframes: {
        slide: {
          "0%": { width: "0%" },
          "100%": { width: "16rem" },
        },
      },
      animation: {
        slide: "slide 0.3s ease-out ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
