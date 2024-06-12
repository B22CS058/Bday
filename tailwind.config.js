/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7CAC9",
        secondary: "#800020",
        texlight: "#FF7F50",
        bgPrimary: "#F7CAC9",
        highlightYellow: '#800020',
        sunrise: {
          light: '#DC143C', // Light orange for sunrise
          DEFAULT: '#FF8800', // Default orange for sunrise
          dark: '#800000', // Darker orange for sunrise
        },
        sunset: {
          light: '#DC143C', // Light orange-pink for sunset
          DEFAULT: '#FF5733', // Default orange-red for sunset
          dark: '#800000', // Darker red for sunset
        },
      },
    },
  },
  plugins: [],
};
