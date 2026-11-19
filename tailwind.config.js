/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // FocusFlow palette
        brand: {
          blue: '#3760F9',
          ink: '#17161B',
          lime: '#D2FC59',
          lavender: '#DAD9FB',
        },
        page: {
          DEFAULT: '#ECEBF8',
          light: '#F6F5FE',
        },
        navy: '#17161B',
        accent: '#D2FC59',
        lightBlue: '#3760F9',
        soft: '#DAD9FB',
        softBlue: '#DAD9FB',
        pale: '#DAD9FB',
        paleBlue: '#DAD9FB',
        strong: '#3760F9',
        strongBlue: '#3760F9',
        dark: '#17161B',
        darkCard: '#17161B',
        muted: '#6B6680',
        pageBg: '#ECEBF8',
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 40px rgba(23, 22, 27, 0.08)',
        card: '0 12px 28px rgba(23, 22, 27, 0.08)',
        lift: '0 24px 48px rgba(23, 22, 27, 0.14)',
      },
      borderRadius: {
        panel: '24px',
        card: '18px',
      },
      maxWidth: {
        site: '1440px',
      },
      backgroundImage: {
        'page-gradient': 'linear-gradient(180deg, #ECEBF8 0%, #F6F5FE 100%)',
        'photo-overlay':
          'linear-gradient(135deg, rgba(55,96,249,0.55), rgba(218,217,251,0.35))',
        'blue-panel':
          'linear-gradient(135deg, #3760F9 0%, #5B7BFA 50%, #8A9FFC 100%)',
        'cta-gradient':
          'linear-gradient(135deg, #2A4DD4 0%, #3760F9 45%, #6B85FB 100%)',
      },
    },
  },
  plugins: [],
}
