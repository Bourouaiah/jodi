/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'sky_blue': '#3056d3',
        'bag': "#3056d3",
        "more_blue": "#104c91"
      },
    },
  },
  plugins: [],
}