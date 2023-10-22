/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      hero: "url('./assets/hero.png')",
      hero_mobile: "url('./assets/hero-mobile.png')",
    },
    extend: {},
  },
  plugins: [],
};
