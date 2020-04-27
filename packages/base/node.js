module.exports = {
  env: { node: true },
  plugins: ["node"],
  rules: {
    "node/no-deprecated-api": "error",
    "node/no-exports-assign": "error",
    "node/no-unpublished-bin": "error",
    "node/no-unpublished-import": "error",
    "node/no-unpublished-require": "error",
    "node/no-unsupported-features/es-builtins": "error",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules", "dynamicImport"] },
    ],
    "node/no-unsupported-features/node-builtins": "error",
    "node/process-exit-as-throw": "error",
    "node/shebang": "error",
  },
};
