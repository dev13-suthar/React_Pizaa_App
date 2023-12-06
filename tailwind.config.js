/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(13px)' },
          '50%': { transform: 'translateY(23px)',background:colors.yellow[300] },
        }
      }
    },
  },
  plugins: [],
}

