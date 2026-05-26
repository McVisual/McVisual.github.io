/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#262421',
        paper: '#f7f3e9',
        notebook: '#fffaf0',
      },
      borderRadius: {
        paper: '8px',
      },
    },
  },
  plugins: [],
}
