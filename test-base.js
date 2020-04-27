const eslintRules = require("@gcangussu/eslint-config/rules/eslint");
const unicornRules = require("@gcangussu/eslint-config/rules/unicorn");
const typescriptRules = require("@gcangussu/eslint-config/rules/typescript");
const typecheckRules = require("@gcangussu/eslint-config/rules/typecheck");
const importRules = require("@gcangussu/eslint-config/rules/import");

module.exports = {
  plugins: ["unicorn", "import", "@typescript-eslint"],
  rules: {
    ...eslintRules,
    ...unicornRules,
    ...typescriptRules,
    ...typecheckRules,
    ...importRules,
  },
};
