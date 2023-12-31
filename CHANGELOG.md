# Change Log

All notable changes to the "T3 Stack / NextJS / ReactJS File Generator for VSCode" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2024-01-08

### Added

- Add settings for experimental https function for NextJS server

## [1.1.1] - 2023-12-27

### Added

- Add new documentation for Features, Commands, and Snippets

## [1.1.0] - 2023-12-26

### Added

- Add settings for the default import alias for `tRPC` files

## [1.0.1] - 2023-12-24

### Changed

- Update `README.md` file

## [1.0.0] - 2023-12-24

### Added

- Add `NextAuth` commands for generating `[...nextauth].ts` file
- Add `tRPC` commands for generating `Router` and `Controller` files
- Add `NextAuth` snippets
- Add `tRPC` snippets
- Add `TailwindCSS` snippets
- Add `i18next` snippets
- Add `zod` snippets
- Add configuration for showing the type in the name of the generated files (e.g. `index.component.tsx`)
- Add new context menu for `NextAuth` and `tRPC` files, and `Prisma` commands

### Changed

- Reorganize all project commands in a new `Project` category for better organization
- Update Page and Layout commands removing the class name input and add a default value of `Page` and `Layout` respectively
- Rename all commands from `Next` to `t3` to avoid conflicts with other extensions commands that use `Next` as a prefix

### Removed

- Remove plain text scope from all snippets to avoid conflicts with `GitHub Copilot Chat` and other extensions

## [0.5.1] - 2023-12-19

### Fixed

- Fix typos in `package.json`

## [0.5.0] - 2023-12-19

### Added

- Add `JavaScript` snippets
- Add `NextJS` commands

### Changed

- Update `HTML` and `RectJS` snippets for better organization and readability of the code

### Fixed

- Fix default extension name in `NextJS` commands

## [0.4.0] - 2023-12-17

### Added

- Add `Prisma` commands for `model`, `migration`, and `seed` generation, and `studio` commands
- Add `Prisma` snippets

### Changed

- Update `ReactJS` Snippets

## [0.3.0] - 2023-12-16

### Added

- Add `HTML` snippets
- Add `ReactJS` snippets

## [0.2.0] - 2023-12-15

### Added

- Add `Create App` commands for `T3 Stack`, `NextJS`, and `ReactJS` projects

## [0.1.0] - 2023-12-14

- Initial release

[unreleased]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v0.5.1...v1.0.0
[0.5.1]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/ManuelGil/vscode-nextjs-generator/releases/tag/v0.1.0
