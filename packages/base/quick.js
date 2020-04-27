const defaultConfig = require("./index");
const typescriptRules = require("./rules/typescript");

// Ensure overrides config is as expected
if (
  defaultConfig.overrides.length !== 1 &&
  !defaultConfig.overrides[0].files.includes("*.ts")
) {
  throw new Error("Default config overrides has changed! Adjust this config.");
}

module.exports = {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,

    // disable expensive eslint-plugin-import rules
    "import/no-cycle": "off",
    "import/no-deprecated": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-unused-modules": "off",
  },
  overrides: [
    {
      ...defaultConfig.overrides[0],
      rules: typescriptRules, // no types aware rules
    },
  ],
};
