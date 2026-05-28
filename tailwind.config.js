/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        med: {
          bg: '#06090f',
          bg2: '#08111d',
          panel: '#0b1320',
          card: '#111a2b',
          elevated: '#151f32',
          ecg: '#2cff88',
          blue: '#3ea0ff',
          cyan: '#56d6ff',
          gold: '#e4c46b',
          red: '#ff4b5c',
          text: '#e8f2ff',
          muted: '#8ea7c4',
          soft: '#c8d8ea',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(44, 255, 136, 0.2)',
        blue: '0 0 24px rgba(62, 160, 255, 0.24)',
        enterprise: '0 28px 90px -48px rgba(62, 160, 255, 0.72)',
        card: '0 24px 70px -54px rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'clinical-radial': 'radial-gradient(circle at 18% 12%, rgba(62,160,255,0.16), transparent 34%), radial-gradient(circle at 84% 24%, rgba(44,255,136,0.10), transparent 28%), linear-gradient(180deg, rgba(8,17,29,0.95) 0%, rgba(6,9,15,1) 68%)',
      },
    },
  },
  plugins: [],
}
