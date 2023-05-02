module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: '#2c5282',
          secondary: '#718096',
          accent: '#f7fafc',
        },
        fontSize: {
          'sm': '14px',
          'md': '16px',
          'lg': '18px',
          'xl': '20px',
        },
        spacing: {
          '1': '4px',
          '2': '8px',
          '3': '12px',
          '4': '16px',
          '5': '20px',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  