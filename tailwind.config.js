/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Developer Mode
        actionTo: "#8e2de2",
        actionFrom: "#4a00e0",
        actionToDark: "#5e1d9c",
        actionFromDark: "#2c0085",
        devPrimary: "#141E61",
        devSecondary: "#00BFA6",
        devText: "#C4C4C4",
        // Artist Mode
        artistPrimary: "#D62828",
        artistSecondary: "#0077B6",
        artistText: "#F5F5F5",
      },
      fontFamily: {
        poppins: ["Poppins"],
        "great-vibes": ['"Great Vibes"'],
        montserrat: ["Montserrat"],
        "open-sans": ['"Open Sans"'],
        "playfair-display": ['"Playfair Display"'],
        lobster: ["Lobster"],
      },
    },
  },
  plugins: [],
};
