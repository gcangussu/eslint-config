module.exports = {
  "@typescript-eslint/adjacent-overload-signatures": "error",
  "@typescript-eslint/array-type": "off",
  "@typescript-eslint/ban-ts-comment": "off",
  "@typescript-eslint/ban-types": "error",
  "@typescript-eslint/class-literal-property-style": "off",
  "@typescript-eslint/consistent-type-assertions": "off",
  "@typescript-eslint/consistent-type-definitions": "off",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/explicit-member-accessibility": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/member-delimiter-style": "off",
  "@typescript-eslint/member-ordering": "off",
  "@typescript-eslint/method-signature-style": "off",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "typeLike",
      format: ["PascalCase"],
    },
  ],
  "@typescript-eslint/no-dynamic-delete": "off",
  "@typescript-eslint/no-empty-interface": "error",
  "@typescript-eslint/no-explicit-any": [
    "error",
    { fixToUnknown: true, ignoreRestArgs: true },
  ],
  "@typescript-eslint/no-extra-non-null-assertion": "error",
  "@typescript-eslint/no-extraneous-class": "error",
  "@typescript-eslint/no-inferrable-types": "warn",
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-namespace": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/no-parameter-properties": "off",
  "@typescript-eslint/no-require-imports": "off",
  "@typescript-eslint/no-this-alias": "off",
  "@typescript-eslint/no-type-alias": "off",
  "@typescript-eslint/no-var-requires": "off",
  "@typescript-eslint/prefer-as-const": "warn",
  "@typescript-eslint/prefer-for-of": "off",
  "@typescript-eslint/prefer-function-type": "off",
  "@typescript-eslint/prefer-namespace-keyword": "off",
  "@typescript-eslint/prefer-optional-chain": "off",
  "@typescript-eslint/prefer-ts-expect-error": "off",
  "@typescript-eslint/triple-slash-reference": "error",
  "@typescript-eslint/type-annotation-spacing": "off",
  "@typescript-eslint/typedef": "off",
  "@typescript-eslint/unified-signatures": "off",

  // extension rules
  "brace-style": "off",
  "@typescript-eslint/brace-style": "off",

  "comma-spacing": "off",
  "@typescript-eslint/comma-spacing": "off",

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

  "no-magic-numbers": "off",
  "@typescript-eslint/no-magic-numbers": "off",

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

  // eslint-plugin-import
  "import/named": "off",
  "import/default": "off",
  "import/namespace": "off",
};
