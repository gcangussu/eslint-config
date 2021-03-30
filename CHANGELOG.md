# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [17.0.0] - 2020-03-30

### Added

- `unicorn/no-array-push-push` rule as `warn`.
- `unicorn/no-static-only-class` rule as `warn`.
- `unicorn/prefer-array-flat` rule as `warn`.

### Changed

- Updated dependencies.

## [16.0.1] - 2020-01-17

### Changed

- Updated dependencies.

## [16.0.0] - 2020-01-08

### Added

- `checkKeyMustBeforeSpread` option to `react/jsx-key` rule.
- `warnOnSpreadAttributes` option to `react/jsx-no-target-blank` rule.
- `allowConstantLoopConditions` option to `@typescript-eslint/no-unnecessary-condition` rule.
- `unicorn/prefer-array-some` rule as `warn`.

### Changed

- Updated dependencies.

## [15.0.0] - 2020-12-28

### Added

- `@typescript-eslint/non-nullable-type-assertion-style` rule as `warn`.
- `unicorn/no-lonely-if` rule as `warn`.
- `unicorn/prefer-date-now` rule as `warn`.

### Fixed

- Disable `no-throw-literal` for TypeScript files because the extension
  rule `@typescript-eslint/no-throw-literal` is enabled.

### Changed

- Updated dependencies.

## [14.0.0] - 2020-12-10

### Added

- `no-unsafe-optional-chaining` rule as `error` for JS files only.

### Changed

- Updated dependencies.
- Requires ESLint >= 7.15.0

## [13.0.0] - 2020-11-24

### Added

- `no-nonoctal-decimal-escape` rule as `error`.

### Changed

- Requires ESLint >=7.14.0
- Updated dependencies.

## [12.0.0] - 2020-11-14

### Added

- `@typescript-eslint/no-confusing-void-expression` rule as `warn`.

### Changed

- Removed `typescript` as a dependency. Now it is a mandatory peer
  dependency. This fixes a bug when trying to install a newer version
  of TypeScript on a project that uses this package.

## [11.0.2] - 2020-11-13

### Changed

- Updated dependencies.

## [11.0.1] - 2020-11-03

### Changed

- Updated dependencies.

## [11.0.0] - 2020-10-31

### Added

- `func-name-matching` rule as `warn`.
- `react/display-name` rule as `error`.
- `import/order` rule as `warn`.
- `@typescript-eslint/no-unnecessary-type-constraint` rule as `warn`.
- `unicorn/new-for-builtins` rule as `warn`.
- `unicorn/number-literal-case` rule as `warn`.
- `unicorn/prefer-array-find` rule as `warn`.
- `unicorn/prefer-ternary` rule as `warn`.
- Allow unassigned import of `.scss`, `.sass` and `.less` files. In
  addition to the already allowed `.css`.

### Changed

- Updated dependencies.

## [10.0.0] - 2020-10-26

### Added

- Enabled `ignoreRestSiblings` option on `no-unused-vars` rule for JavaScript
  files only.
- Disallow call expressions as default exports (`allowCallExpression: false`
  on `import/no-anonymous-default-export` rule options).
- `react/prop-types` rule as `warn` for JavaScript files only.
- `react/default-props-match-prop-types` rule as `error`.
- `react/forbid-prop-types` rule as `warn`.

### Removed

- deprecated `no-buffer-constructor` rule.
- deprecated `jsx-a11y/accessible-emoji` rule.

### Changed

- `default-param-last` severity from `error` to `warn`.
- `no-unused-vars` severity from `error` to `warn` for JavaScript files only.
- `import/newline-after-import` severity from `error` to `warn`.
- `import/no-unassigned-import` severity from `error` to `warn`.
- `import/no-anonymous-default-export` severity from `error` to `warn`.
- Updated dependencies.

## [9.0.2] - 2020-10-24

### Changed

- Move TypeScript to non-dev dependencies. This fixes a problem when using
  this package on a project which doesn't have TypeScript installed.

## [9.0.1] - 2020-10-24

### Changed

- Updated dependencies.

## [9.0.0] - 2020-10-18

This release is motivated by the new [React 16.14 release](https://github.com/facebook/react/releases/tag/v16.14.0).
This release supports [automatically importing](https://babeljs.io/docs/en/babel-preset-react#runtime)
functions that JSX transpiles to. And because of that, we cannot assume
that the absence of the `React` import on a JSX file is an error. Neither
that the usage of JSX implies on the usage of the imported `React`.

### Removed

- Disabled `react/react-in-jsx-scope` rule of React config.
- Disabled `react/jsx-uses-react` rule of React config.

### Changed

- Updated `eslint-plugin-unicorn` from v22 to v23.

## [8.1.0] - 2020-10-15

### Added

- Add `@typescript-eslint/no-duplicate-imports` extension rule for TypeScript.

### Changed

- Updated dependencies.

## [8.0.3] - 2020-10-02

### Changed

- Updated dependencies.

## [8.0.2] - 2020-09-22

### Changed

- Updated dependencies.

## [8.0.1] - 2020-09-14

### Changed

- Updated dependencies.

## [8.0.0] - 2020-09-08

### Added

- Add `jest/valid-title` as _warn_ to the _jest_ config.
- Add `@typescript-eslint/no-loop-func` extension rule for TypeScript
  files.

### Removed

- Remove setting `parserOptions.ecmaVersion` to 2020 for TypeScript files.
  `typescript-eslint` now handles unknown versions correctly.

### Changed

- Update `eslint-plugin-jest` from 23.20.0 to 24.0.0.
- Replace `jest/no-test-callback` for `jest/no-done-callback` rule in the
  _jest_ config. The new rule will now report hooks using callbacks as well,
  not just tests.
- Update dependencies.

## [7.1.0] - 2020-09-02

### Added

- Support resolving `.jsx` files.
- Imports with explicit `.js` or `.jsx` extensions are resolved to
  TypeScript modules (`.ts`, `.tsx`, `.d.ts`). This is the same behavior
  of the TypeScript compiler.
- Support resolving modules through TypeScript's base URL and paths
  mapping (compiler options `baseUrl` and `paths` respectively).
  This requires configuration
  ([instructions on README](README.md#resolving-modules-with-typescripts-paths-and-baseurl-options)).

### Changed

- Use `eslint-import-resolver-typescript` for resolving imported modules
  with `eslint-plugin-import`. Previously we were using the default `node`
  resolver shipped with `eslint-plugin-import`.

## [7.0.1] - 2020-09-01

### Changed

- Fix `Parsing error: Invalid value for lib provided: es2021` by setting
  `parserOptions.ecmaVersion` to 2020 for TypeScript files
- Update README.md with information relating `parserOptions.project`
  and linting performance.

## [7.0.0] - 2020-09-01

### Added

- `@typescript-eslint/no-shadow` rule as warn.

### Removed

- `@typescript-eslint/no-unused-vars-experimental` rule (covered by `tsc`'s
  `noUnusedLocals` and `noUnusedParameters` options).

### Changed

- Require ESLint >=7.8.0.
- Update typescript-eslint from 3.10.1 to 4.0.1.
- Bump `parserOptions.ecmaVersion` from 2020 to 2021 in the base config.

## [6.1.4] - 2020-08-31

### Changed

- updated dependencies.

## [6.1.3] - 2020-08-18

### Changed

- updated dependencies.

## [6.1.2] - 2020-08-11

### Changed

- updated dependencies.

## [6.1.1] - 2020-08-03

### Changed

- updated dependencies.

## [6.1.0] - 2020-07-28

### Changed

- set `allowSingleExtends` on `@typescript-eslint/no-empty-interface`

## [6.0.0] - 2020-07-28

### Added

- `react/no-typos` as error on the `react` preset
- `jest/no-interpolation-in-snapshots` as error in the `jest` preset

### Changed

- updated dependencies.

## [5.1.2] - 2020-07-21

### Changed

- updated dependencies.

## [5.1.1] - 2020-07-07

### Fixed

- fixed changelog links

## [5.1.0] - 2020-07-07

### Changed

- set `react/jsx-no-target-blank` option `allowReferrer` to `true`.
- updated dependencies.

## [5.0.1] - 2020-06-23

### Added

- All plugins as **optional** peer dependencies. See section _"About plugin dependencies"_
  in the README.

## [5.0.0] - 2020-06-22

### Added

- `jest/no-conditional-expect` as warn.
- TS extension rule `@typescript-eslint/no-loss-of-precision`.

### Removed

- Removed deprecated `jest/no-try-expect` (functionality covered by `jest/no-conditional-expect`).

## [4.0.0] - 2020-06-20

### Added

- `jest/no-deprecated-functions` as error.
- `node/global-require` as warn.
- `node/no-process-env` as warn.
- `jsx-a11y/autocomplete-valid` as error.
- `no-useless-backreference` as error.
- `no-loss-of-precision` as error.
- `no-unreachable-loop` as error.
- Added `exports` field on package.json.
- Add Jest as optional peer dependency so eslint-plugin-jest can access the
  correct version of Jest in users' projects.

### Changed

- Require ESLint >=7.3.0.
- Change plugins and parsers peer dependencies to be direct dependencies.
- Updated all dependencies to current latests.
- Replaced deprecated Jest plugin's `jest/no-expect-resolves` with `jest/no-restricted-matchers`.
- Replaced deprecated ESLint's core rules `no-new-require`, `no-path-concat`
  and `no-process-exit` by their respective Node plugin rules (`node/no-new-require`,
  `node/no-path-concat` and `node/no-process-exit`).

[unreleased]: https://github.com/gcangussu/eslint-config/compare/v17.0.0...HEAD
[17.0.0]: https://github.com/gcangussu/eslint-config/compare/v16.0.1...v17.0.0
[16.0.1]: https://github.com/gcangussu/eslint-config/compare/v16.0.0...v16.0.1
[16.0.0]: https://github.com/gcangussu/eslint-config/compare/v15.0.0...v16.0.0
[15.0.0]: https://github.com/gcangussu/eslint-config/compare/v14.0.0...v15.0.0
[14.0.0]: https://github.com/gcangussu/eslint-config/compare/v13.0.0...v14.0.0
[12.0.0]: https://github.com/gcangussu/eslint-config/compare/v11.0.2...v12.0.0
[11.0.2]: https://github.com/gcangussu/eslint-config/compare/v11.0.1...v11.0.2
[11.0.1]: https://github.com/gcangussu/eslint-config/compare/v11.0.0...v11.0.1
[11.0.0]: https://github.com/gcangussu/eslint-config/compare/v10.0.0...v11.0.0
[10.0.0]: https://github.com/gcangussu/eslint-config/compare/v9.0.2...v10.0.0
[9.0.2]: https://github.com/gcangussu/eslint-config/compare/v9.0.1...v9.0.2
[9.0.1]: https://github.com/gcangussu/eslint-config/compare/v9.0.0...v9.0.1
[9.0.0]: https://github.com/gcangussu/eslint-config/compare/v8.1.0...v9.0.0
[8.1.0]: https://github.com/gcangussu/eslint-config/compare/v8.0.3...v8.1.0
[8.0.3]: https://github.com/gcangussu/eslint-config/compare/v8.0.2...v8.0.3
[8.0.2]: https://github.com/gcangussu/eslint-config/compare/v8.0.1...v8.0.2
[8.0.1]: https://github.com/gcangussu/eslint-config/compare/v8.0.0...v8.0.1
[8.0.0]: https://github.com/gcangussu/eslint-config/compare/v7.1.0...v8.0.0
[7.1.0]: https://github.com/gcangussu/eslint-config/compare/v7.0.1...v7.1.0
[7.0.1]: https://github.com/gcangussu/eslint-config/compare/v7.0.0...v7.0.1
[7.0.0]: https://github.com/gcangussu/eslint-config/compare/v6.1.4...v7.0.0
[6.1.4]: https://github.com/gcangussu/eslint-config/compare/v6.1.3...v6.1.4
[6.1.3]: https://github.com/gcangussu/eslint-config/compare/v6.1.2...v6.1.3
[6.1.2]: https://github.com/gcangussu/eslint-config/compare/v6.1.1...v6.1.2
[6.1.1]: https://github.com/gcangussu/eslint-config/compare/v6.1.0...v6.1.1
[6.1.0]: https://github.com/gcangussu/eslint-config/compare/v6.0.0...v6.1.0
[6.0.0]: https://github.com/gcangussu/eslint-config/compare/v5.1.2...v6.0.0
[5.1.2]: https://github.com/gcangussu/eslint-config/compare/v5.1.1...v5.1.2
[5.1.1]: https://github.com/gcangussu/eslint-config/compare/v5.1.0...v5.1.1
[5.1.0]: https://github.com/gcangussu/eslint-config/compare/v5.0.1...v5.1.0
[5.0.1]: https://github.com/gcangussu/eslint-config/compare/v5.0.0...v5.0.1
[5.0.0]: https://github.com/gcangussu/eslint-config/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/gcangussu/eslint-config/compare/v3.0.1...v4.0.0
