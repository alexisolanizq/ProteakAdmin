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
    keyframes: {
      bounceInRight: {
        "0%": { transform: "translateX(100%)" },
        "60%": { transform: "translateX(-10%)" },
        "80%": { transform: "translateX(5%)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      "bounce-in-right": "bounceInRight 0.5s ease-out",
    },
  },
  plugins: [],
};
