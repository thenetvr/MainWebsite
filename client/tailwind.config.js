/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'myFont': ["myFont", "sourcesanspro"]
      },
      colors: {
        'custom-blue': 'rgba(72, 139, 193, 1)'
      }
    },
  },
  plugins: [],
}

