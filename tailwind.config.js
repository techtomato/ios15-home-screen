module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['-apple-system', 'ui-sans-serif', 'system-ui']
    },
    
    extend: {
      boxShadow: {
        '3xl-white': "0 0 70px 0 rgba(255, 255, 255, 0.2)",
        '2xl-white-inset': "inset 0 -20px 60px 0 rgba(255, 255, 255, 0.2), 0 -20px 50px 5px rgba(255, 255, 255, 0.2)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
