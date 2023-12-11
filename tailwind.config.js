/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        maxMd: "940px",
        maxLg: "1164px",
      },
      colors: {
        // Dark Mode
        actionToDark: "#5e1d9c",
        actionFromDark: "#2c0085",
        darkPrimary: "#1b1129",
        darkText: "#fff",
        // Light Mode
        actionTo: "#8e2de2",
        actionFrom: "#4a00e0",
        lightPrimary: "#f8f8f8",
        lightText: "#000000",
      },
      fontFamily: {
        exo: ['"Exo 2"'],
        poppins: ["Poppins"],
        nunito: ["Nunito"],
        "great-vibes": ['"Great Vibes"'],
        montserrat: ["Montserrat"],
        "open-sans": ['"Open Sans"'],
        "playfair-display": ['"Playfair Display"'],
        lobster: ["Lobster"],
      },
    },
  },
  plugins: [Myclass],
};
