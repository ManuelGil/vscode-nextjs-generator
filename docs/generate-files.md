# How to create files

## Index

- [How to create files](#how-to-create-files)
  - [Index](#index)
  - [Commands](#commands)
  - [Usage](#usage)
  - [Settings](#settings)

## Commands

| Title                           | Purpose                                              |
| ------------------------------- | ---------------------------------------------------- |
| T3: Generate Class or Interface | Creates a new, generic class or interface definition |
| T3: Generate Component          | Creates a new, generic component                     |
| T3: Generate Layout             | Creates a new, generic layout                        |
| T3: Generate Loading            | Creates a new, generic loading component             |
| T3: Generate Page               | Creates a new, generic page                          |
| T3: Add NextAuth file           | Adds a new file called [...nextauth].ts              |
| T3: Generate tRPC Router        | Creates a new, generic tRPC router                   |
| T3: Generate tRPC Controller    | Creates a new, generic tRPC controller               |

## Usage

![commands](https://raw.githubusercontent.com/ManuelGil/vscode-nextjs-generator/main/docs/images/commands.png)

![menu-general](https://raw.githubusercontent.com/ManuelGil/vscode-nextjs-generator/main/docs/images/menu-general.png)

## Settings

In the `.vscode/settings.json` file, copy and paste the following settings:

```jsonc
{
  "nextjs.files.alias": "~",
  "nextjs.files.extension": "tsx",
  "nextjs.files.showType": true,
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
}
```

- `nextjs.files.alias`: The alias to use for the import statement. For example, if you use `~` as an alias, the import statement will look like this: `import { Component } from '~/components'`
- `nextjs.files.extension`: The extension to use for the file. For example, if you use `tsx` as an extension, the file will be created as `component.tsx`
- `nextjs.files.showType`: Whether to show the type of the component. For example, if you use `true` as a value, the file will be created as `home.component.tsx` and if you use `false` as a value, the file will be created as `home.ts`
- `nextjs.files.include`: The file extensions to watch for changes. For example, if you use `ts` and `tsx` as extensions, the extension will watch for changes in `.ts` and `.tsx` files
- `nextjs.files.exclude`: The files to exclude from watching. For example, if you use `**/node_modules/**` and `**/dist/**` as exclusions, the extension will not watch for changes in the `node_modules` and `dist` folders
- `nextjs.files.watch`: The types of files to watch for changes. For example, if you use `components` and `routers` as types, the extension will watch for changes with the `component` and `router` type in the file name. For example, `home.component.tsx` and `home.router.tsx`
- `nextjs.files.showPath`: Whether to show the path of the file in the file name. For example, if you use `true` as a value, the file will be created as `home.component.tsx (pages/home)` and if you use `false` as a value, the file will be created as `home.component.tsx`
