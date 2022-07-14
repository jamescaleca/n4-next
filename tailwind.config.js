/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        '9999px': '9999px'
      },
      gridTemplateColumns: {
        "navbar": "1fr auto minmax(400px, 3fr) 2fr"
      }
    },
  },
  plugins: [],
}
