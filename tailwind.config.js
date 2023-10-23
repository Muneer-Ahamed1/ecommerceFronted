/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ext': "320px",
        'sm': '500px',
        'cust2': "600px",
        'md': '800px',
        'lg': '994px',
        'xl': '1000px',
        '2xl': '1536px',
      }

    },
  },
  plugins: [],
}




