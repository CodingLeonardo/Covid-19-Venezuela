const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack: {
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            extractComments: "all",
            compress: {
              drop_console: true
            }
          }
        })
      ]
    }
  }
};
