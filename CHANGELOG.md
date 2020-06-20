# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[unreleased]: https://github.com/gcangussu/eslint-config/compare/v4.0.0...HEAD
[4.0.0]: https://github.com/gcangussu/eslint-config/compare/v3.0.1...v4.0.0
