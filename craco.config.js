const TerserPlugin = require("terser-webpack-plugin");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  style: {
    postcss: {
      plugins: [
        autoprefixer,
        cssnano({
          preset: "default",
        }),
        postcssPresetEnv({
          stage: 0,
        }),
      ],
    },
  },
  webpack: {
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            extractComments: "all",
            compress: {
              drop_console: true,
            },
          },
        }),
      ],
    },
  },
};
