/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        page: {
          DEFAULT: '#EEF1F5',
          light: '#F7F9FB',
        },
        navy: '#1F2A37',
        accent: '#7DB9E8',
        lightBlue: '#7DB9E8',
        soft: '#CFE6F7',
        softBlue: '#CFE6F7',
        pale: '#EAF4FC',
        paleBlue: '#EAF4FC',
        strong: '#2F80C9',
        strongBlue: '#2F80C9',
        dark: '#2B2F36',
        darkCard: '#2B2F36',
        muted: '#6B7785',
        pageBg: '#EEF1F5',
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 40px rgba(31, 42, 55, 0.08)',
        card: '0 12px 28px rgba(31, 42, 55, 0.08)',
        lift: '0 24px 48px rgba(31, 42, 55, 0.14)',
      },
      borderRadius: {
        panel: '24px',
        card: '18px',
      },
      maxWidth: {
        site: '1440px',
      },
      backgroundImage: {
        'page-gradient': 'linear-gradient(180deg, #EEF1F5 0%, #F7F9FB 100%)',
        'photo-overlay':
          'linear-gradient(135deg, rgba(47,128,201,0.55), rgba(125,185,232,0.25))',
        'blue-panel':
          'linear-gradient(135deg, #2F80C9 0%, #5BA3D9 50%, #7DB9E8 100%)',
        'cta-gradient':
          'linear-gradient(135deg, #1F6FB8 0%, #2F80C9 45%, #7DB9E8 100%)',
      },
    },
  },
  plugins: [],
}
