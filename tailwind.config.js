/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
        },
        accent: '#d4af37',
        text: {
          dark: '#1a1a1a',
          light: '#666666',
          muted: '#999999',
        },
        bg: {
          light: '#f5f5f5',
          white: '#ffffff',
        },
        border: '#e0e0e0',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'md': '0 2px 8px rgba(0, 0, 0, 0.12)',
        'lg': '0 4px 16px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
