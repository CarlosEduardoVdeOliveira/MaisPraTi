/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,css,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f9f9f9",
          500: "#242424",
          600: "#1a1a1a",
        },
        blue: {
          200: "#00D8FF",
          300: "#61dafbaa",
        },
        purple: {
          500: "#535bf2",
          600: "#646cff",
        },
        green: {
          700: "#213547",
        },
      },
    },
  },
  plugins: [],
};
