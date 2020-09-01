const eslintRules = require("./rules/eslint");
const unicornRules = require("./rules/unicorn");
const importRules = require("./rules/import");
const typescriptRules = require("./rules/typescript");
const typecheckRules = require("./rules/typecheck");

const allExtensions = [".ts", ".tsx", ".d.ts", ".mjs", ".js", ".cjs"];

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["unicorn", "import"],
  settings: {
    "import/extensions": allExtensions,
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: { extensions: allExtensions },
    },
  },
  rules: { ...eslintRules, ...unicornRules, ...importRules },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: { ecmaVersion: 2020 },
      plugins: ["@typescript-eslint"],
      rules: { ...typescriptRules, ...typecheckRules },
    },
  ],
};
