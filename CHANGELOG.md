# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[unreleased]: https://github.com/gcangussu/eslint-config/compare/v8.0.3...HEAD
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
