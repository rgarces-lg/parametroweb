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
          emerald: '#059669',
          teal: '#0d9488',
          slate: '#334155',
          gray: '#4b5563',
          orange: '#f25a29',
          black: '#0f0f0f',
          dark: '#1a1a1a',
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
