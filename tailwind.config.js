/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["'Lato'", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#5a6dac",
          300: "#37436d",
          600: "#1F263E",
        },
      },
    },
  },
  plugins: [],
};
