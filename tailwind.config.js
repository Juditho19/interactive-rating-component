/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "Orange": "hsl(25, 97%, 53%)",
      "White": "hsl(0, 100%, 100%)",
      "lightGrey": "hsl(217, 12%, 63%)",
      "darkGrey": "hsl(213, 19%, 18%)",
      "darkerGrey": "hsl(214, 16%, 12%)",
      "darkestGrey": "hsl(216, 12%, 8%)",

    },
    backgroundImage: {
      'grey-gradient': 'linear-gradient(200deg, hsl(213, 19%, 18%), hsl(214, 16%, 12%))',
      // direction, start color, end color or 180deg
    },
    fontFamily: {
      "Overpass": ["Overpass", "sans-serif"],
    },
  },
  plugins: [],
}