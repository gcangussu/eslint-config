const eslintRules = require("./rules/eslint");
const unicornRules = require("./rules/unicorn");
const typescriptRules = require("./rules/typescript");

const allExtensions = [".ts", ".tsx", ".d.ts", ".js"];

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["unicorn", "import"],
  settings: {
    "import/extensions": allExtensions,
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".d.ts", ".js"],
      },
    },
  },
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
