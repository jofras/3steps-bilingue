/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E68F2', // royal blue
        altprimary: '#78f9a7ff', // light green for headers
        accent: '#22C55E', // green-500
        background: '#F3F4F6', // gray-100 (logo: 8d8d8d)
        textdark: '#1F2937', // gray-800
        textmid: '#4B5563', // gray-600
        textlight: '#9CA3AF', // gray-400
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ["Bowlby One SC", "sans-serif"],
        heading: ["Sigmar", "sans-serif"],
        body: ["Nunito Sans", "sans-serif"],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'nav': '0 2px 8px 0 rgba(31,41,55,0.08)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-out',
      },
    },
  },
  plugins: [],
}

