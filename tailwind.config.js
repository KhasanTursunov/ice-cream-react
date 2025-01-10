/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto, serif",
        fredoka: "Fredoka, serif",
        hindi: "hind-madurai, serif",
      },
    },
  },
  plugins: [],
};
