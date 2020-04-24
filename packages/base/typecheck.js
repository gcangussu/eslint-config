const typecheckRules = require("./rules/typecheck");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: typecheckRules,
};
