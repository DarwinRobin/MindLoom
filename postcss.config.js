// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},   // ← use the new official PostCSS plugin
    autoprefixer: {},             // ← keep autoprefixer
  },
}
