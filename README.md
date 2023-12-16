# React / NextJS / T3 Stack File Generator

[![Latest Release](https://img.shields.io/visual-studio-marketplace/v/imgildev.vscode-nextjs-generator?style=flat&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
[![GitHub license](https://img.shields.io/github/license/ManuelGil/vscode-nextjs-generator)]()

This versatile extension enhances your NextJS development experience by offering a comprehensive set of commands tailored for file generation within your project. Seamlessly create various project elements, including pages, components, layouts, classes, interfaces, and more, all designed to align with the T3 Stack paradigm—leveraging NextJS, NextAuth, Prisma, tRPC, and other essential technologies.

![demo](https://raw.githubusercontent.com/ManuelGil/vscode-nextjs-generator/main/docs/images/demo.gif)

Elevate your productivity with this VSCode extension, empowering you to efficiently generate files for your T3 Stack project. Whether you're shaping individual components or initiating an entirely new project, the extension simplifies the process with intuitive commands. The extension also includes a command to start your NextJS server, allowing you to quickly preview your application.

## Table of Contents

- [React / NextJS / T3 Stack File Generator](#react--nextjs--t3-stack-file-generator)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Create a New Project](#create-a-new-project)
  - [Project Settings](#project-settings)
  - [Features](#features)
    - [Files](#files)
    - [Commands](#commands)
  - [Other Extensions](#other-extensions)
  - [Changelog](#changelog)
  - [Authors](#authors)
  - [License](#license)

## Requirements

- VSCode 1.46.0 or later

## Create a New Project

You can create a new project using the Vite / NextJS / T3 Stack CLI. To do so, open the command palette in VSCode:

- `CTRL + SHIFT + P` (Windows)
- `CMD + SHIFT + P` (Mac OS)

Type `Next: Create Project` and press `ENTER`.

![create-project](https://raw.githubusercontent.com/ManuelGil/vscode-nextjs-generator/main/docs/images/create-project.gif)

## Project Settings

Configure your project by creating or updating a settings.json file at the project's root. If you already have a `.vscode/settings.json` file, skip the first two steps.

1. Open the command palette in VSCode:

   - `CTRL + SHIFT + P` (Windows)
   - `CMD + SHIFT + P` (Mac OS)

2. Type `Preferences: Open Workspace Settings (JSON)`.

3. In the `.vscode/settings.json` file, copy and paste the following settings:

   ```jsonc
   {
     "nextjs.files.extension": "tsx",
     "nextjs.server.turbo": true
   }
   ```

4. **Restart VS Code**

Your project is now set up to automatically format code upon saving.

## Features

### Files

| Title                             | Purpose                                              |
| --------------------------------- | ---------------------------------------------------- |
| Next: Generate Class or Interface | Creates a new, generic class or interface definition |
| Next: Generate Component          | Creates a new, generic component                     |
| Next: Generate Layout             | Creates a new, generic layout                        |
| Next: Generate Loading            | Creates a new, generic loading component             |
| Next: Generate Page               | Creates a new, generic page                          |

### Commands

| Title                | Purpose                                                        |
| -------------------- | -------------------------------------------------------------- |
| Next: Create Project | Creates a new project using the Vite / NextJS / T3 Stack CLI   |
| Next: Start Server   | Builds and serves your application, rebuilding on file changes |

## Other Extensions

- [NestJS File Generator for VSCode](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-generator)
- [NestJS Snippets for VSCode Editor](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-snippets-extension)
- [Angular File Generator for VSCode Editor](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-angular-generator)
- [React / NextJS / T3 Stack File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
- [Nx / Angular / Nest / Next Essential Extension Pack](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nx-pack)
- [CodeIgniter 4 Snippets for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-shield-snippets)
- [CodeIgniter 4 Spark for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-shield-spark)
- [CodeIgniter 4 Essential Extension Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-shield-pack)
- [Moodle Pack](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-moodle-snippets)
- [Mustache Template Engine - Snippets & Autocomplete](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## Authors

- **Manuel Gil** - _Owner_ - [ManuelGil](https://github.com/ManuelGil)

See also the list of [contributors](https://github.com/ManuelGil/vscode-nextjs-generator/contributors) who participated in this project.

## License

Next File Generator for VSCode is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.
