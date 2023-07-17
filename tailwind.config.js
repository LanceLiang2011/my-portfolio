/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(-10deg);" },
          "100%": { transform: "rotate(35deg)" },
        },
      },
      animation: {
        wave: "wiggle 1s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("daisyui")],
};
