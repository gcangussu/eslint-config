# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[unreleased]: https://github.com/gcangussu/eslint-config/compare/v6.1.4...HEAD
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
