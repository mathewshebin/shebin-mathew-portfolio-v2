/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'matte-black': '#090909',
        'accent-red': '#E53935',
        'accent-red-hover': '#C62828',
        'card-bg-dark': 'rgba(255, 255, 255, 0.03)',
        'card-border-dark': 'rgba(255, 255, 255, 0.08)',
        'text-secondary-dark': '#8e8e93',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(0.5deg)' },
        }
      }
    },
  },
  plugins: [],
}
