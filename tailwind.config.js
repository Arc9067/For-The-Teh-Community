/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {},
      fontFamily: {
        Chelsea_Market: ["Chelsea Market", "cursive"],
        Cherry_Bomb_One: ["Cherry Bomb One", "cursive"],
      },
      backgroundImage: {
        hero_bg: "url('./src/assets/hero.jpg')",
      },
      padding: {
        hun: "100px",
        fifty: "50px",
      },
    },
  },
  plugins: [],
};
