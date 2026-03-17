/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          slate: '#222222ff',
          gray: '#313233ff',
          orange: '#f26229ff',
          accent: '#f28329ff',
          black: '#0f0f0f',
          dark: '#1a1a1a',
          light: '#fffefcff',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      spacing: {
        'touch': '44px',
      }
    },
  },
  plugins: [],
}
