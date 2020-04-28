module.exports = {
  // Static analysis
  "import/no-unresolved": ["error", { commonjs: true }],
  "import/named": "error",
  "import/default": "error",
  "import/namespace": ["error", { allowComputed: true }],
  "import/no-dynamic-require": "error",
  "import/no-webpack-loader-syntax": "error",
  "import/no-self-import": "error",
  "import/no-cycle": ["error", { commonjs: true }],
  "import/no-useless-path-segments": ["error", { commonjs: true }],

  // Helpful warnings
  "import/export": "error",
  "import/no-extraneous-dependencies": [
    "error",
    { devDependencies: ["*.test.js", "*.test.ts", "*.test.tsx"] },
  ],

  // Module systems

  // Style guide
  "import/newline-after-import": "error",
  "import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
  "import/no-anonymous-default-export": "error",
};
