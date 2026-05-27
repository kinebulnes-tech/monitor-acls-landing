/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        med: {
          bg: '#06090f',
          panel: '#0b1320',
          card: '#111a2b',
          ecg: '#2cff88',
          blue: '#3ea0ff',
          red: '#ff4b5c',
          text: '#e8f2ff',
          muted: '#8ea7c4',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(44, 255, 136, 0.2)',
        blue: '0 0 24px rgba(62, 160, 255, 0.24)',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
