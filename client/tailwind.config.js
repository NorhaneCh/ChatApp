/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "light-green-color": "#83DDC8",
        "yellow-color": "#DED35E",
        "dark-blue": "#0D0C27",
      },
      screens: {
        xs: "450px",
        lg: "1280px",
        xl: "1920px",
      },
    },
  },
  plugins: [],
};
