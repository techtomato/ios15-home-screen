module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['-apple-system', 'ui-sans-serif', 'system-ui']
    },
    
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
