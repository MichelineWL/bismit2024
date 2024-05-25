/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem', // Customize the radius value as needed
      },
    },
  },
  plugins: [],
}

