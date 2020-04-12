const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
    process.env.NODE_ENV === "production" &&
      purgecss({
        content: ["./src/**/**/*.js"],
        extractors: [
          {
            extractor: class TailwindExtractor {
              static extract(content) {
                return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
              }
            },
            extensions: ["css", "html", "js"],
          },
        ],
      }),
  ],
};
