const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./**/**.md", "./**/*.vue", "./**/*.js"],
  defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    }),
    ...(process.env.NODE_ENV == "production" ? [purgecss] : []),
  ],
};
