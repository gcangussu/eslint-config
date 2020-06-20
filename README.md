# ESLint Config

Opinionated ESLint config made for usage in JavaScript and TypeScript code.
Support for React, Jest and Node.js plugable presets. Includes a _quick_
preset for fast linting by disabling slow rules.

Objectives:

- Help developers avoid errors and bad practices.
- Fast feedback on your code editor.
- Fullest coverage on your CI.
- Don't include rules for enforcing formatting (work nicely with tools like
  [prettier](https://prettier.io/)).
- Avoid rules that are covered by TypeScript.

# Usage

Always extend the base config first. It is good for general JavaScript
and TypeScript code. It Doesn't include rules for Node.js, React or
anything else.

```json
{
  "root": true,
  "extends": [
    "@gcangussu/eslint-config"
    // other config(s) or none
  ]
}
```

If you experience long linting times, check the _quick_ config.

Configs that can be put after the base config are:

- `@gcangussu/eslint-config/react`: React and JSX.
- `@gcangussu/eslint-config/node`: Node.js and commonjs modules.
- `@gcangussu/eslint-config/jest`: Jest testing framework.
- `@gcangussu/eslint-config/quick`: Disable slow rules of the base config.

The order of these extra configs should not matter.

## Quick config

This config removes slow rules that are added by the base config. Just
extend it after the base config.

```json
{
  "root": true,
  "extends": ["@gcangussu/eslint-config", "@gcangussu/eslint-config/quick"]
}
```

## Full and quick dynamic config

Slow linting feedback is especially bad on your code editor. So you may
want to only use the _quick_ config on your IDE, using all the rules on
your testing script and CI. This can be achieved by keeping two config
files (e.g. `.eslintrc.json` and `.eslintrc-full.json`) like the two
examples above. And then running `eslint` with `--config .eslintrc-full.json`
on your test script.

Other option is by using a single JavaScript config file (`eslintrc.js`)
and a environment variable:

```js
const isQuick = process.env.LINT_QUICK !== "false";

module.exports = {
  root: true,
  extends: [
    "@gcangussu/eslint-config",
    ...(isQuick ? ["@gcangussu/eslint-config/quick"] : []),
  ],
};
```

By default `isQuick` will be `true`. So your editor will lint quickly.
Then, use `LINT_QUICK=false eslint` on your test script to test with all
rules.

## TypeScript

By default we assume you'll have a `tsconfig.json` file on the current
working directory. To customize this check `tsconfigRootDir` and `project`
parser options of [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md).

Example customization to use the config file own directory and a TS config
named `tsconfig-production`:

```js
parserOptions: {
  tsconfigRootDir: __dirname,
  project: ['./tsconfig-production.json']
}
```
