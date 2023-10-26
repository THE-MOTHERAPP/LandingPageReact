/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
    extend: {
      screens: {
        'sm': '760px',
        // => @media (min-width: 992px) { ... }
        "md":"900px"
      },
    },
  },

  plugins: [],
};
