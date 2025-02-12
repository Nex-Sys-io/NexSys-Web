/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    'postcss-import': {}, // Helps handle @import rules in CSS
    'tailwindcss': {},    // Loads Tailwind CSS
    'autoprefixer': {},   // Adds vendor prefixes automatically
  },
};
