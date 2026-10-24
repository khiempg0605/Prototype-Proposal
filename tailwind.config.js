/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tamca: {
          navy: '#0B132B',
          dark: '#1C2541',
          slate: '#3A506B',
          accent: '#EAB308',
          accentDark: '#CA8A04',
          accentLight: '#FEF08A',
          amber: '#F59E0B',
          orange: '#EA580C',
          teal: '#0D9488',
          green: '#10B981',
          red: '#EF4444'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
