module.exports = {
  "@typescript-eslint/adjacent-overload-signatures": "error",
  "@typescript-eslint/ban-types": "error",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "typeLike",
      format: ["PascalCase"],
    },
  ],
  "@typescript-eslint/no-empty-interface": [
    "error",
    { allowSingleExtends: true },
  ],
  "@typescript-eslint/no-explicit-any": [
    "error",
    { fixToUnknown: true, ignoreRestArgs: true },
  ],
  "@typescript-eslint/no-extra-non-null-assertion": "error",
  "@typescript-eslint/no-extraneous-class": "error",
  "@typescript-eslint/no-inferrable-types": "warn",
  "@typescript-eslint/no-invalid-void-type": "error",
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-namespace": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
  "@typescript-eslint/prefer-as-const": "warn",
  "@typescript-eslint/triple-slash-reference": "error",

  // extension rules
  "brace-style": "off",
  "@typescript-eslint/brace-style": "off",

  "comma-spacing": "off",
  "@typescript-eslint/comma-spacing": "off",

  "comma-dangle": "off",
  "@typescript-eslint/comma-dangle": "off",

  "default-param-last": "off",
  "@typescript-eslint/default-param-last": "error",

  "func-call-spacing": "off",
  "@typescript-eslint/func-call-spacing": "off",

  indent: "off",
  "@typescript-eslint/indent": "off",

  "init-declarations": "off",
  "@typescript-eslint/init-declarations": "off",

  "keyword-spacing": "off",
  "@typescript-eslint/keyword-spacing": "off",

  "no-array-constructor": "off",
  "@typescript-eslint/no-array-constructor": "error",

  "no-dupe-class-members": "off",
  "@typescript-eslint/no-dupe-class-members": "error",

  "no-empty-function": "off",
  "@typescript-eslint/no-empty-function": "error",

  "no-extra-parens": "off",
  "@typescript-eslint/no-extra-parens": "off",

  "no-extra-semi": "off",
  "@typescript-eslint/no-extra-semi": "off",

  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": "error",

  "no-loss-of-precision": "off",
  "@typescript-eslint/no-loss-of-precision": "error",

  "no-magic-numbers": "off",
  "@typescript-eslint/no-magic-numbers": "off",

  "no-shadow": "off",
  "@typescript-eslint/no-shadow": "warn",

  "no-unused-expressions": "off",
  "@typescript-eslint/no-unused-expressions": [
    "error",
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: true,
    },
  ],

  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": "off",

  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": "off",

  "no-useless-constructor": "off",
  "@typescript-eslint/no-useless-constructor": "error",

  quotes: "off",
  "@typescript-eslint/quotes": "off",

  semi: "off",
  "@typescript-eslint/semi": "off",

  "space-before-function-paren": "off",
  "@typescript-eslint/space-before-function-paren": "off",

  // unneeded/conflicting eslint core rules
  "getter-return": "off",
  "no-dupe-args": "off",
  "no-dupe-keys": "off",
  "no-unreachable": "off",
  "valid-typeof": "off",
  "no-const-assign": "off",
  "no-new-symbol": "off",
  "no-this-before-super": "off",
  "no-undef": "off",
  "no-redeclare": "off",
  "consistent-return": "off",

  // unneeded/conflicting eslint-plugin-import
  "import/named": "off",
  "import/default": "off",
  "import/namespace": "off",
  "import/no-named-as-default-member": "off",
};
