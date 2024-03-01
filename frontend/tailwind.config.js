/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
      },
      fontFamily: {
        heading: ["Montserrat", "serif"],
        primary: ["Roboto", "sans-serif"],
        accent: ["Fira Sans", "sans-serif"],
        bubble: ["Bubblegum Sans", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/clothes.jpg')",
        "info-tshirt": "url('/src/assets/tshirt.jpg')",
        "info-polo": "url('/src/assets/polo.jpg')",
        "info-hoodie": "url('/src/assets/hoodie.jpg')",
        "info-sweatshirt": "url('/src/assets/sweatshirt.jpg')",

        newHero: "url('/src/assets/cropped.jpg')",
        grad: "linear-gradient(to right, #abbaab, #ffffff);",
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fit,minmax(300px,1fr))",
      },
    },
  },
  plugins: [],
};
