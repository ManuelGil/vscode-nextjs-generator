import { window } from 'vscode';

// Import the Config and helper functions
import { Config } from '../configs';
import { pickItem, runCommand } from '../helpers';

/**
 * The TerminalController class.
 *
 * @class
 * @classdesc The class that represents the example controller.
 * @export
 * @public
 * @property {Config} config - The configuration
 * @example
 * const controller = new TerminalController(config);
 */
export class TerminalController {
  // -----------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------

  /**
   * Constructor for the TerminalController class.
   *
   * @constructor
   * @param {Config} config - The configuration
   * @public
   * @memberof TerminalController
   */
  constructor(private readonly config: Config) {}

  // -----------------------------------------------------------------
  // Methods
  // -----------------------------------------------------------------

  // Public methods
  /**
   * Creates a new project.
   *
   * @function newProject
   * @public
   * @memberof TerminalController
   * @example
   * await controller.newProject();
   *
   * @returns {Promise<void>} - No return value
   */
  async newProject(): Promise<void> {
    const type = await window.showQuickPick(
      [
        {
          label: 'create-t3-app',
          description: 'Create a new project with Create T3 App',
        },
        {
          label: 'create-next-app',
          description: 'Create a new project with Create Next App',
        },
        {
          label: 'create-vite-app',
          description: 'Create a new project with React and Vite',
        },
      ],
      {
        placeHolder: 'What kind of project do you want to create?',
      },
    );

    if (!type) {
      return;
    }

    const manager = await pickItem(
      ['npm', 'yarn', 'pnpm', 'bun'],
      'Which package manager do you want to use?',
    );

    if (!manager) {
      return;
    }

    switch (type.label) {
      case 'create-vite-app':
        const viteType = await window.showQuickPick(
          [
            {
              label: 'react',
              description: 'Create a new project with React and Vite',
            },
            {
              label: 'react-ts',
              description:
                'Create a new project with React, TypeScript and Vite',
            },
            {
              label: 'react-swc',
              description: 'Create a new project with React, SWC and Vite',
            },
            {
              label: 'react-swc-ts',
              description:
                'Create a new project with React, TypeScript, SWC and Vite',
            },
          ],
          {
            placeHolder: 'What kind of project do you want to create?',
          },
        );

        if (!viteType) {
          return;
        }

        switch (manager) {
          case 'npm':
            runCommand(
              type.label,
              `npm create vite@latest . -- --template ${viteType.label}`,
            );
            break;

          case 'yarn':
            runCommand(
              type.label,
              `yarn create vite . --template ${viteType.label}`,
            );
            break;

          case 'pnpm':
            runCommand(
              type.label,
              `pnpm create vite . --template ${viteType.label}`,
            );
            break;

          case 'bun':
            runCommand(
              type.label,
              `bunx create-vite . --template ${viteType.label}`,
            );
            break;
        }

        break;

      case 'create-next-app':
        switch (manager) {
          case 'npm':
            runCommand(type.label, 'npx create-next-app@latest .');
            break;

          case 'yarn':
            runCommand(type.label, 'yarn create next-app .');
            break;

          case 'pnpm':
            runCommand(type.label, 'pnpm create next-app .');
            break;

          case 'bun':
            runCommand(type.label, 'bunx create-next-app .');
            break;
        }

        break;

      case 'create-t3-app':
        switch (manager) {
          case 'npm':
            runCommand(type.label, 'npm create t3-app@latest .');
            break;

          case 'yarn':
            runCommand(type.label, 'yarn create t3-app .');
            break;

          case 'pnpm':
            runCommand(type.label, 'pnpm create t3-app@latest .');
            break;

          case 'bun':
            runCommand(type.label, 'bun create t3-app@latest .');
            break;
        }

        break;
    }
  }

  /**
   * Starts the server.
   *
   * @function start
   * @public
   * @memberof TerminalController
   * @example
   * controller.start();
   *
   * @returns {void} - No return value
   */
  start(): void {
    runCommand(
      'start',
      'npx next dev' +
        (this.config.turbo ? ' --turbo' : '') +
        (this.config.experimentalHttps ? ' --experimental-https' : ''),
    );
  }

  /**
   * Executes the Prisma schema to the database.
   *
   * @function prismaExecute
   * @public
   * @memberof TerminalController
   * @example
   * await controller.prismaExecute();
   *
   * @returns {Promise<void>} - No return value
   */
  async prismaExecute(): Promise<void> {
    const confirm = await pickItem(
      ['Yes', 'No'],
      'Are you sure you want to execute the Prisma schema to the database?',
    );

    if (!confirm || confirm === 'No') {
      return;
    }

    runCommand('prisma db execute', 'npx prisma db execute');
  }

  /**
   * Pulls the Prisma schema to the database.
   *
   * @function prismaPull
   * @public
   * @memberof TerminalController
   * @example
   * await controller.prismaPull();
   *
   * @returns {Promise<void>} - No return value
   */
  async prismaPull(): Promise<void> {
    const confirm = await pickItem(
      ['Yes', 'No'],
      'Are you sure you want to pull the Prisma schema to the database?',
    );

    if (!confirm || confirm === 'No') {
      return;
    }

    runCommand('prisma db pull', 'npx prisma db pull');
  }

  /**
   * Pushes the Prisma schema to the database.
   *
   * @function prismaPush
   * @public
   * @memberof TerminalController
   * @example
   * await controller.prismaPush();
   *
   * @returns {Promise<void>} - No return value
   */
  async prismaPush(): Promise<void> {
    const confirm = await pickItem(
      ['Yes', 'No'],
      'Are you sure you want to push the Prisma schema to the database?',
    );

    if (!confirm || confirm === 'No') {
      return;
    }

    runCommand('prisma db push', 'npx prisma db push');
  }

  /**
   * Seeds the Prisma schema to the database.
   *
   * @function prismaSeed
   * @public
   * @memberof TerminalController
   * @example
   * await controller.prismaSeed();
   *
   * @returns {Promise<void>} - No return value
   */
  async prismaSeed(): Promise<void> {
    const confirm = await pickItem(
      ['Yes', 'No'],
      'Are you sure you want to seed the Prisma schema to the database?',
    );

    if (!confirm || confirm === 'No') {
      return;
    }

    runCommand('prisma db seed', 'npx prisma db seed');
  }

  /**
   * Formats the Prisma schema.
   *
   * @function prismaFormat
   * @public
   * @memberof TerminalController
   * @example
   * controller.prismaFormat();
   *
   * @returns {void} - No return value
   */
  prismaFormat(): void {
    runCommand('prisma format', 'npx prisma format');
  }

  /**
   * Generates the Prisma schema.
   *
   * @function prismaGenerate
   * @public
   * @memberof TerminalController
   * @example
   * controller.prismaGenerate();
   *
   * @returns {void} - No return value
   */
  prismaGenerate(): void {
    runCommand('prisma generate', 'npx prisma generate');
  }

  /**
   * Initializes Prisma.
   *
   * @function prismaInit
   * @public
   * @memberof TerminalController
   * @example
   * controller.prismaInit();
   *
   * @returns {void} - No return value
   */
  prismaInit(): void {
    runCommand('prisma init', 'npx prisma init');
  }

  /**
   * Deploys the Prisma schema.
   *
   * @function prismaMigrateDeploy
   * @public
   * @memberof TerminalController
   * @example
   * await controller.prismaMigrateDeploy();
   *
   * @returns {Promise<void>} - No return value
   */
  async prismaMigrateDeploy(): Promise<void> {
    const confirm = await pickItem(
      ['Yes', 'No'],
      'Are you sure you want to deploy the Prisma schema?',
    );

    if (!confirm || confirm === 'No') {
      return;
    }

    runCommand('prisma migrate deploy', 'npx prisma migrate deploy');
  }

  /**
   * Devs the Prisma schema.
   *
   * @function prismaMigrateDev
   * @public
   * @memberof TerminalController
   * @example
   * await controller.prismaMigrateDev();
   *
   * @returns {Promise<void>} - No return value
   */
  async prismaMigrateDev(): Promise<void> {
    const confirm = await pickItem(
      ['Yes', 'No'],
      'Are you sure you want to migrate the Prisma schema?',
    );

    if (!confirm || confirm === 'No') {
      return;
    }

    runCommand('prisma migrate dev', 'npx prisma migrate dev');
  }

  /**
   * Resets the Prisma schema.
   *
   * @function prismaMigrateReset
   * @public
   * @memberof TerminalController
   * @example
   * await controller.prismaMigrateReset();
   *
   * @returns {Promise<void>} - No return value
   */
  async prismaMigrateReset(): Promise<void> {
    const confirm = await pickItem(
      ['Yes', 'No'],
      'Are you sure you want to reset the Prisma schema?',
    );

    if (!confirm || confirm === 'No') {
      return;
    }

    runCommand('prisma migrate reset', 'npx prisma migrate reset');
  }

  /**
   * Shows the Prisma schema status.
   *
   * @function prismaMigrateStatus
   * @public
   * @memberof TerminalController
   * @example
   * controller.prismaMigrateStatus();
   *
   * @returns {void} - No return value
   */
  prismaMigrateStatus(): void {
    runCommand('prisma migrate status', 'npx prisma migrate status');
  }

  /**
   * Opens the Prisma studio.
   *
   * @function prismaStudio
   * @public
   * @memberof TerminalController
   * @example
   * controller.prismaStudio();
   *
   * @returns {void} - No return value
   */
  prismaStudio(): void {
    runCommand('prisma studio', 'npx prisma studio');
  }

  /**
   * Validates the Prisma schema.
   *
   * @function prismaValidate
   * @public
   * @memberof TerminalController
   * @example
   * controller.prismaValidate();
   *
   * @returns {void} - No return value
   */
  prismaValidate(): void {
    runCommand('prisma validate', 'npx prisma validate');
  }

  /**
   * Generates the Drizzle schema migration.
   *
   * @function drizzleGenerate
   * @public
   * @memberof TerminalController
   * @example
   * await controller.drizzleGenerate();
   *
   * @returns {Promise<void>} - No return value
   */
  async drizzleGenerate(): Promise<void> {
    const type = await pickItem(
      ['pg', 'mysql', 'sqlite'],
      'For which database do you want to  the Drizzle schema migration?',
    );

    if (!type) {
      return;
    }

    runCommand('drizzle-kit generate', `npx drizzle-kit generate:${type}`);
  }

  /**
   * Pulls the Drizzle schema.
   *
   * @function drizzlePull
   * @public
   * @memberof TerminalController
   * @example
   * await controller.drizzlePull();
   *
   * @returns {Promise<void>} - No return value
   */
  async drizzlePull(): Promise<void> {
    const type = await pickItem(
      ['pg', 'mysql', 'sqlite'],
      'From which database do you want to pull the Drizzle schema?',
    );

    if (!type) {
      return;
    }

    const confirm = await pickItem(
      ['Yes', 'No'],
      'Are you sure you want to pull the Drizzle schema to the database?',
    );

    if (!confirm || confirm === 'No') {
      return;
    }

    runCommand('drizzle-kit pull', `npx drizzle-kit pull:${type}`);
  }

  /**
   * Pushes the Drizzle schema.
   *
   * @function drizzlePush
   * @public
   * @memberof TerminalController
   * @example
   * await controller.drizzlePush();
   *
   * @returns {Promise<void>} - No return value
   */
  async drizzlePush(): Promise<void> {
    const type = await pickItem(
      ['pg', 'mysql', 'sqlite'],
      'To which database do you want to push the Drizzle schema?',
    );

    if (!type) {
      return;
    }

    const confirm = await pickItem(
      ['Yes', 'No'],
      'Are you sure you want to push the Drizzle schema to the database?',
    );

    if (!confirm || confirm === 'No') {
      return;
    }

    runCommand('drizzle-kit push', `npx drizzle-kit push:${type}`);
  }

  /**
   * Drops the Drizzle schema.
   *
   * @function drizzleDrop
   * @public
   * @memberof TerminalController
   * @example
   * await controller.drizzleDrop();
   *
   * @returns {Promise<void>} - No return value
   */
  async drizzleDrop(): Promise<void> {
    const confirm = await pickItem(
      ['Yes', 'No'],
      'Are you sure you want to drop the Drizzle schema to the database?',
    );

    if (!confirm || confirm === 'No') {
      return;
    }

    runCommand('drizzle-kit drop', 'npx drizzle-kit drop');
  }

  /**
   * Migrates the Drizzle schema.
   *
   * @function drizzleMigrate
   * @public
   * @memberof TerminalController
   * @example
   * await controller.drizzleMigrate();
   *
   * @returns {Promise<void>} - No return value
   */
  async drizzleUp(): Promise<void> {
    const type = await pickItem(
      ['pg', 'mysql', 'sqlite'],
      'To which database do you want to migrate the Drizzle schema?',
    );

    if (!type) {
      return;
    }

    const confirm = await pickItem(
      ['Yes', 'No'],
      'Are you sure you want to migrate the Drizzle schema to the database?',
    );

    if (!confirm || confirm === 'No') {
      return;
    }

    runCommand('drizzle-kit up', `npx drizzle-kit up:${type}`);
  }

  /**
   * Migrates the Drizzle schema.
   *
   * @function drizzleMigrate
   * @public
   * @memberof TerminalController
   * @example
   * await controller.drizzleMigrate();
   *
   * @returns {Promise<void>} - No return value
   */
  async drizzleCkeck(): Promise<void> {
    const type = await pickItem(
      ['pg', 'mysql', 'sqlite'],
      'For which database do you want to check the Drizzle schema migration?',
    );

    if (!type) {
      return;
    }

    runCommand('drizzle-kit check', `npx drizzle-kit check:${type}`);
  }

  /**
   * Opens the Drizzle studio.
   *
   * @function drizzleStudio
   * @public
   * @memberof TerminalController
   * @example
   * controller.drizzleStudio();
   *
   * @returns {void} - No return value
   */
  drizzleStudio(): void {
    runCommand('drizzle-kit studio', 'npx drizzle-kit studio');
  }
}
