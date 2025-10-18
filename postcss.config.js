// postcss.config.js
const config = {
  plugins: {
    tailwindcss: {}, // correct plugin name (tuff)
    autoprefixer: {}, // apparently crucial for cross-browser compatibility
  },
};

export default config;