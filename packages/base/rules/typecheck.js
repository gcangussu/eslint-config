module.exports = {
  "@typescript-eslint/await-thenable": "error",
  "@typescript-eslint/no-base-to-string": "error",
  "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/no-for-in-array": "error",
  "@typescript-eslint/no-implied-eval": "error",
  "@typescript-eslint/no-misused-promises": "error",
  "@typescript-eslint/no-throw-literal": "error",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
  "@typescript-eslint/no-unnecessary-condition": "error",
  "@typescript-eslint/no-unnecessary-qualifier": "warn",
  "@typescript-eslint/no-unnecessary-type-assertion": "warn",
  "@typescript-eslint/no-unsafe-assignment": "error",
  "@typescript-eslint/no-unsafe-call": "error",
  "@typescript-eslint/no-unsafe-member-access": "error",
  "@typescript-eslint/no-unsafe-return": "error",
  "@typescript-eslint/no-unused-vars-experimental": [
    "error",
    {
      ignoredNamesRegex: false,
      ignoreArgsIfArgsAfterAreUsed: true,
    },
  ],
  "@typescript-eslint/prefer-includes": "warn",
  "@typescript-eslint/prefer-reduce-type-parameter": "warn",
  "@typescript-eslint/prefer-regexp-exec": "error",
  "@typescript-eslint/prefer-string-starts-ends-with": "error",
  "@typescript-eslint/promise-function-async": "error",
  "@typescript-eslint/require-array-sort-compare": "error",
  "@typescript-eslint/restrict-plus-operands": [
    "error",
    { checkCompoundAssignments: true },
  ],
  "@typescript-eslint/restrict-template-expressions": [
    "error",
    {
      allowNumber: true,
      allowBoolean: true,
      allowAny: false,
      allowNullable: true,
    },
  ],
  "@typescript-eslint/strict-boolean-expressions": "error",
  "@typescript-eslint/switch-exhaustiveness-check": "error",

  // extension rules
  "require-await": "off",
  "@typescript-eslint/require-await": "off",

  "no-return-await": "off",
  "@typescript-eslint/return-await": "error",
};
