/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': 'hsl(259, 100%, 65%)',
        'secondary': 'hsl(0, 100%, 67%)',
        'grey': 'hsl(0, 0%, 94%)',
      }
      
    },
  },
  plugins: [],
}

