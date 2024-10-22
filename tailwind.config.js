/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        subscribe: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "100" },
        },
      },
      animation: {
        spin: "spin 3s linear infinite",
        subscribe: "subscribe 3s linear forwards 1",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
