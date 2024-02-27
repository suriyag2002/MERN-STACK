const path = require('path');

module.exports = {
  // Your other webpack config settings here...

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    extensions: ['.js', '.jsx', '.json'], // Add other extensions as needed
  },

  // More webpack config settings as needed...
};
