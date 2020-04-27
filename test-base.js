const eslintRules = require("@gcangussu/eslint-config-base/rules/eslint");
const unicornRules = require("@gcangussu/eslint-config-base/rules/unicorn");
const typescriptRules = require("@gcangussu/eslint-config-base/rules/typescript");
const typecheckRules = require("@gcangussu/eslint-config-base/rules/typecheck");
const importRules = require("@gcangussu/eslint-config-base/rules/import");

module.exports = {
  plugins: ["unicorn", "@typescript-eslint"],
  rules: {
    ...eslintRules,
    ...unicornRules,
    ...typescriptRules,
    ...typecheckRules,
    ...importRules,
  },
};
