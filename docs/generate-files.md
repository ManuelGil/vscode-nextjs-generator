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
| T3: Add NextAuth file           | Adds a new file called [...nextauth].js              |
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
}
```

- `nextjs.files.alias`: The alias to use for the import statement. For example, if you use `~` as an alias, the import statement will look like this: `import { Component } from '~/components'`
- `nextjs.files.extension`: The extension to use for the file. For example, if you use `tsx` as an extension, the file will be created as `component.tsx`
- `nextjs.files.showType`: Whether to show the type of the component. For example, if you use `true` as a value, the file will be created as `home.component.tsx` and if you use `false` as a value, the file will be created as `home.ts`
