# Change Log

All notable changes to the "T3 Stack / NextJS / ReactJS File Generator for VSCode" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.6.0] - 2025-01-09

### Added

- Add version extension check to show a message when the extension is outdated
- Add `biome` linting and formatting tool to the project
- Add `biome` configuration file to define the linting and formatting rules
- Add VS Code test configuration and update test scripts

### Changed

- Improve the welcome and update messages in the extension
- Upgrade dependencies to the latest versions available

## [2.5.1] - 2024-11-07

### Fixed

- Fix the `json2ts` and `json2zod` issues when the selection does not have a JSON strict format

## [2.5.0] - 2024-04-01

### Changed

- Update the `Drizzle` snippets to integrate the new `Drizzle` functionality
- Update the `cli-commands.md` file with the new `Drizzle` commands
- Update the `README.md` file to improve the contribution guidelines
- Upgrade dependencies to the latest versions available

## [2.4.0] - 2024-03-28

### Changed

- Update the `getFiles` method in the `ListFilesController` so that it can be used without instantiating the class
- Update the `ListFilesProvider` and `ListRoutesProvider` to use the new `getFiles` method
- Upgrade dependencies to the latest versions available

## [2.3.0] - 2024-03-07

### Added

- Add List of Hooks View

### Changed

- Improve the route regex to match the routes in the file

## [2.2.0] - 2024-03-04

### Added

- Add `Show Path In File Name` setting to show the path in the file name

## [2.1.0] - 2024-03-02

### Added

- Add List of Components View

### Fixed

- Fix issues with the file generation

## [2.0.0] - 2024-03-01

### Added

- Add List of Files View
- Add List of Routes View
- Add Feedback View
- Add file includes section to the settings
- Add file excludes section to the settings
- Add file to watch section to the settings
- Add compodoc dependencies for the documentation generation

### Changed

- Refactor the folder structure of the extension to improve the codebase
- Improve the generation of the files to use the new folder structure
- Upgrade dependencies to the latest versions available
- Update settings to use the new folder structure
- Improve the documentation of the extension

### Fixed

- Fix issues related to the new folder structure

## [1.5.0] - 2024-01-22

### Added

- Add new `Drizzle` snippets

## [1.4.0] - 2024-01-22

### Added

- Add `Drizzle` snippets and commands

## [1.3.0] - 2024-01-14

### Added

- Add convert `json` to `typescript` and `zod` object commands

### Changed

- Improve file generation

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

[unreleased]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v2.6.0...HEAD
[2.6.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v2.5.1...v2.6.0
[2.5.1]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v2.5.0...v2.5.1
[2.5.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v2.4.0...v2.5.0
[2.4.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v2.3.0...v2.4.0
[2.3.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v1.5.0...v2.0.0
[1.5.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/ManuelGil/vscode-nextjs-generator/compare/v1.2.0...v1.3.0
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
