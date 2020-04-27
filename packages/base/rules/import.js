module.exports = {
  // Static analysis
  "import/no-unresolved": ["error", { commonjs: true }],
  "import/named": "error",
  "import/default": "error",
  "import/namespace": ["error", { allowComputed: true }],
  "import/no-restricted-paths": "off",
  "import/no-absolute-path": "off",
  "import/no-dynamic-require": "error",
  "import/no-internal-modules": "off",
  "import/no-webpack-loader-syntax": "error",
  "import/no-self-import": "error",
  "import/no-cycle": ["error", { commonjs: true }],
  "import/no-useless-path-segments": ["error", { commonjs: true }],
  "import/no-relative-parent-imports": "off",

  // Helpful warnings
  "import/export": "error",
  "import/no-named-as-default": "off",
  "import/no-named-as-default-member": "off",
  "import/no-deprecated": "off",
  "import/no-extraneous-dependencies": [
    "error",
    { devDependencies: ["*.test.js", "*.test.ts", "*.test.tsx"] },
  ],
  "import/no-mutable-exports": "off",
  "import/no-unused-modules": "off",

  // Module systems
  "import/unambiguous": "off",
  "import/no-commonjs": "off",
  "import/no-amd": "off",
  "import/no-nodejs-modules": "off",

  // Style guide
  "import/first": "off",
  "import/exports-last": "off",
  "import/no-duplicates": "off",
  "import/no-namespace": "off",
  "import/extensions": "off",
  "import/order": "off",
  "import/newline-after-import": "error",
  "import/prefer-default-export": "off",
  "import/max-dependencies": "off",
  "import/no-unassigned-import": ["error", { allow: ["*.css"] }],
  "import/no-named-default": "off",
  "import/no-default-export": "off",
  "import/no-named-export": "off",
  "import/no-anonymous-default-export": "error",
  "import/group-exports": "off",
  "import/dynamic-import-chunkname": "off",
};
