const eslintRules = require("./rules/eslint");
const unicornRules = require("./rules/unicorn");
const typescriptRules = require("./rules/typescript");

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["unicorn", "@typescript-eslint"],
  rules: {
    ...eslintRules,
    ...unicornRules,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      rules: typescriptRules,
    },
  ],
};
