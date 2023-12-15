module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'primary': '#22c55e',
        'secondary': '#94a3b8',
        'darkgrey': '#1f2937',
        'darkgreen': '#166534',
      },
    },
  },
  plugins: [],
};
