const withSass = require("@zeit/next-sass");
const path = require("path");
module.exports = withSass({
  distDir: "dist",
  cssModules: true,
});
