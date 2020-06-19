const typecheckRules = require("./rules/typecheck");

module.exports = {
  parserOptions: {
    project: null,
  },
  rules: {
    // disable expensive eslint-plugin-import rules
    "import/no-cycle": "off",
    "import/no-deprecated": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-unused-modules": "off",

    // disable all type aware rules
    ...Object.keys(typecheckRules).reduce((obj, key) => {
      if (key.startsWith("@typescript-eslint/")) obj[key] = "off";
      return obj;
    }, {}),
  },
};
