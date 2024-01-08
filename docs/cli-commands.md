# How to use the terminal commands

## Index

- [How to use the terminal commands](#how-to-use-the-terminal-commands)
  - [Index](#index)
  - [Commands](#commands)
  - [Usage](#usage)
  - [Settings](#settings)

## Commands

| Title                     | Purpose                                                                      |
| ------------------------- | ---------------------------------------------------------------------------- |
| T3: Create Project        | Creates a new project using the T3 Stack / NextJS / Vite CLI                 |
| T3: Prisma DB Execute     | Execute native commands to your database                                     |
| T3: Prisma DB Pull        | Pull the state from the database to the Prisma schema using introspection    |
| T3: Prisma DB Push        | Push the state from your Prisma schema to your database                      |
| T3: Prisma DB Seed        | Seed your database                                                           |
| T3: Prisma Format         | Format a Prisma schema                                                       |
| T3: Prisma Generate       | Generate artifacts                                                           |
| T3: Prisma Init           | Set up a new Prisma project                                                  |
| T3: Prisma Migrate Deploy | Apply pending migrations to update the database schema in production/staging |
| T3: Prisma Migrate Dev    | Create a migration from changes in Prisma schema                             |
| T3: Prisma Migrate Reset  | Reset your database and apply all migrations, all data will be lost          |
| T3: Prisma Migrate Status | Check the status of your database migrations                                 |
| T3: Prisma Studio         | Browse your data with Prisma Studio                                          |
| T3: Prisma Validate       | Validate a Prisma schema                                                     |
| T3: Start Server          | Builds and serves your application, rebuilding on file changes               |

## Usage

![commands](https://raw.githubusercontent.com/ManuelGil/vscode-nextjs-generator/main/docs/images/commands.png)

![menu-prisma](https://raw.githubusercontent.com/ManuelGil/vscode-nextjs-generator/main/docs/images/menu-prisma.png)

## Settings

In the `.vscode/settings.json` file, copy and paste the following settings:

```jsonc
{
  "nextjs.server.turbo": true,
  "nextjs.server.experimentalHttps": true,
}
```

- `nextjs.server.turbo`: Turbo mode is a new mode that enables incremental compilation and dramatically improves the startup time of Next.js development servers. It's only available in Next.js 14 or newer.
- `nextjs.server.experimentalHttps`: Enable HTTPS for the NextJS server. This is an experimental feature and it's only available in Next.js 14 or newer. You can read more about it [here](https://nextjs.org/docs/pages/api-reference/next-cli#https-for-local-development).
