/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#4f46e5',
        background: '#0f172a',
        surface: '#1e293b',
        text: '#e2e8f0'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}