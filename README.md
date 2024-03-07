# T3 Stack / NextJS / ReactJS File Generator

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/imgildev.vscode-nextjs-generator?style=for-the-badge&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/imgildev.vscode-nextjs-generator?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/imgildev.vscode-nextjs-generator?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/imgildev.vscode-nextjs-generator?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator&ssr=false#review-details)
[![GitHub Repo stars](https://img.shields.io/github/stars/ManuelGil/vscode-nextjs-generator?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-nextjs-generator)
[![GitHub license](https://img.shields.io/github/license/ManuelGil/vscode-nextjs-generator?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-nextjs-generator/blob/main/LICENSE)

<p align="center">
<a href="https://www.producthunt.com/posts/t3-stack-next-and-react-file-generator?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-t3&#0045;stack&#0045;next&#0045;and&#0045;react&#0045;file&#0045;generator" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge?post_id=431311&theme=light&period=daily" alt="T3&#0032;Stack&#0044;&#0032;Next&#0032;and&#0032;React&#0032;File&#0032;Generator - Effortless&#0032;file&#0032;generation | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
</p>

Elevate your development workflow with our cutting-edge extension tailored for NextJS 14 (compatibility for version 13). Designed as the quintessential development companion, this toolset redefines file generation, optimizing every phase of your project's lifecycle. Seamlessly create pages, components, layouts, and more—all meticulously crafted to align with the esteemed T3 Stack paradigm. Leverage the capabilities of advanced technologies like NextJS, ReactJS, Prisma, Drizzle, TailwindCSS, i18next, Zod, and numerous other essential frameworks.

![demo](https://raw.githubusercontent.com/ManuelGil/vscode-nextjs-generator/main/docs/images/demo.gif)

Ready to transcend your development experience?

Boost your efficiency with this VSCode extension, designed to streamline file generation for your T3 Stack project. Whether crafting individual components or kickstarting a new venture, the extension simplifies tasks through intuitive commands. Additionally, initiate your NextJS server effortlessly, enabling swift previews of your application.

![preview](https://raw.githubusercontent.com/ManuelGil/vscode-nextjs-generator/main/docs/images/preview.png)

## Index

- [T3 Stack / NextJS / ReactJS File Generator](#t3-stack--nextjs--reactjs-file-generator)
  - [Index](#index)
  - [Requirements](#requirements)
  - [Create a New Project](#create-a-new-project)
  - [Project Settings](#project-settings)
  - [Features](#features)
    - [Commands to Create Files](#commands-to-create-files)
    - [Terminal Commands](#terminal-commands)
    - [Snippets](#snippets)
    - [Context Menu](#context-menu)
  - [Connect with me](#connect-with-me)
  - [Other Extensions](#other-extensions)
  - [Changelog](#changelog)
  - [Authors](#authors)
  - [License](#license)

## Requirements

- VSCode 1.76.0 or later

## Create a New Project

You can create a new project using the T3 Stack / NextJS / Vite CLI. To do so, open the command palette in VSCode:

- `CTRL + SHIFT + P` (Windows)
- `CMD + SHIFT + P` (Mac OS)

Type `T3: Create Project` and press `ENTER`.

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
     "nextjs.files.alias": "~", // The import alias for the files to be created. Example: "~", "@", "#", etc
     "nextjs.files.extension": "tsx", // The extension of the files to be created. Example: "tsx"
     "nextjs.files.showType": true, // Show the type of the file in the file name. Example: "home.component.tsx"
     "nextjs.files.include": [
         "js",
         "jsx",
         "ts",
         "tsx"
     ], // The file extensions to watch for changes. Example: "js", "jsx", "ts", "tsx"
     "nextjs.files.exclude": [
         "**/node_modules/**",
         "**/dist/**",
         "**/out/**",
         "**/build/**",
         "**/.*/**"
     ], // The files to exclude from watching. Example: "**/node_modules/**", "**/dist/**", "**/out/**", "**/build/**", "**/.*/**"
     "nextjs.files.watch": [
         "controllers",
         "components",
         "routers"
     ], // The types of files to watch for changes. Example: "controllers", "components", "routers"
     "nextjs.files.showPath": true, // Show the path of the file in the file name. Example: "home.component.tsx (pages/home)"
     "nextjs.server.turbo": true, // Enable Turbo Mode for NextJS server (Only for NextJS 14 or later)
     "nextjs.server.experimentalHttps": true, // Enable HTTPS for the NextJS server (Only for NextJS 14 or later)
   }
   ```

4. **Restart VS Code**

Your project is now set up to automatically format code upon saving.

## Features

### Commands to Create Files

See the following documentation about [how to create files](./docs/generate-files.md) for more information.

### Terminal Commands

See the following documentation about [how to use the terminal commands](./docs/cli-commands.md) for more information.

### Snippets

See the following documentation about [how to use the snippets](./docs/snippets.md) for more information.

### Context Menu

See the following documentation about [how to use the context menu](./docs/context-menu.md) for more information.

## Connect with me

[![GitHub followers](https://img.shields.io/github/followers/ManuelGil?style=for-the-badge&logo=github)](https://github.com/ManuelGil)
[![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/imgildev?style=for-the-badge&logo=x)](https://twitter.com/imgildev)

## Other Extensions

- [NestJS File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-generator)
- [NestJS Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-snippets-extension)
- [Angular File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-angular-generator)
- [T3 Stack / NextJS / ReactJS File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
- [CodeIgniter 4 Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-snippets)
- [CodeIgniter 4 Shield Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-shield-snippets)
- [CodeIgniter 4 Spark](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-spark)
- [Moodle Pack](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-moodle-snippets)
- [Mustache Template Engine - Snippets & Autocomplete](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## Authors

- **Manuel Gil** - _Owner_ - [ManuelGil](https://github.com/ManuelGil)

See also the list of [contributors](https://github.com/ManuelGil/vscode-nextjs-generator/contributors) who participated in this project.

## License

T3 Stack / NextJS / ReactJS File Generator for VSCode is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.
