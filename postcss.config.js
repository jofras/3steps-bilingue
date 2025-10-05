// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Correct plugin name
    autoprefixer: {},          // Crucial for cross-browser compatibility
  },
};

export default config;