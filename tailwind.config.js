/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A5568",
        accent: "#2B6CB0",
      },
    },
  },
  plugins: [],
};
