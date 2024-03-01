import { Uri } from 'vscode';

// Import the Config and helper functions
import { Config } from '../configs';
import {
  dasherize,
  getName,
  getPath,
  getRelativePath,
  saveFile,
  titleize,
} from '../helpers';

/**
 * The FileController class.
 *
 * @class
 * @classdesc The class that represents the example controller.
 * @export
 * @public
 * @property {Config} config - The configuration
 * @example
 * const controller = new FileController(config);
 */
export class FileController {
  // -----------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------

  /**
   * Constructor for the FileController class.
   *
   * @constructor
   * @param {Config} config - The configuration
   * @public
   * @memberof FileController
   */
  constructor(private readonly config: Config) {}

  // -----------------------------------------------------------------
  // Methods
  // -----------------------------------------------------------------

  // Public methods
  /**
   * Creates a new class.
   *
   * @function newClass
   * @param {Uri} [path] - The path to the folder
   * @public
   * @async
   * @memberof FileController
   * @example
   * await controller.newClass();
   *
   * @returns {Promise<void>} - No return value
   */
  async newClass(path?: Uri): Promise<void> {
    // Get the relative path
    const folderPath: string = path ? await getRelativePath(path.path) : '';

    // Get the path to the folder
    const folder = await getPath(
      'Folder name',
      'Folder name. E.g. src, app...',
      folderPath,
      (path: string) => {
        if (!/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)) {
          return 'The folder name must be a valid name';
        }
        return;
      },
    );

    if (!folder) {
      return;
    }

    // Get the type
    let type = await getName(
      'Type class name',
      'E.g. class, interface, type, enum...',
      (type: string) => {
        if (!/[a-z]+/.test(type)) {
          return 'Invalid format!';
        }
        return;
      },
    );

    if (!type) {
      return;
    }

    // Get the class name
    const className = await getName(
      'Name',
      'E.g. User, Role, Post...',
      (name: string) => {
        if (!/^[A-Z][A-Za-z]{2,}$/.test(name)) {
          return 'Invalid format! Entity names MUST be declared in camelCase.';
        }
        return;
      },
    );

    if (!className) {
      return;
    }

    const content = `export default ${type} ${className}${titleize(type)} {
\t// ... your code goes here
}
`;

    if (this.config.showType) {
      type += '.';
    } else {
      type = '';
    }

    type = type.length !== 0 ? `.${type}` : '';

    const filename = `${dasherize(className)}.${type}${this.config.extension}`;

    saveFile(folder, filename, content);
  }

  /**
   * Creates a new component.
   *
   * @function newComponent
   * @param {Uri} [path] - The path to the folder
   * @public
   * @async
   * @memberof FileController
   * @example
   * await controller.newComponent();
   *
   * @returns {Promise<void>} - No return value
   */
  async newComponent(path?: Uri): Promise<void> {
    // Get the relative path
    const folderPath: string = path ? await getRelativePath(path.path) : '';

    // Get the path to the folder
    const folder = await getPath(
      'Folder name',
      'Folder name. E.g. src, app...',
      folderPath,
      (path: string) => {
        if (!/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)) {
          return 'The folder name must be a valid name';
        }
        return;
      },
    );

    if (!folder) {
      return;
    }

    // Get the function name
    const functionName = await getName(
      'Component Name',
      'E.g. Title, Header, Main, Footer...',
      (name: string) => {
        if (!/^[A-Z][A-Za-z]{2,}$/.test(name)) {
          return 'Invalid format! Entity names MUST be declared in camelCase.';
        }
        return;
      },
    );

    if (!functionName) {
      return;
    }

    const content = `interface ${functionName}Props {
\tchildren: React.ReactNode;
}

export function ${functionName}({ children }: ${functionName}Props) {
\treturn (
\t\t<>
\t\t\t<h1>${functionName}</h1>
\t\t\t{children}
\t\t</>
\t);
}
`;

    let type = '';

    if (this.config.showType) {
      type = 'component.';
    }

    const filename = `${dasherize(functionName)}.${type}tsx`;

    saveFile(folder, filename, content);
  }

  /**
   * Creates a new layout.
   *
   * @function newLayout
   * @param {Uri} [path] - The path to the folder
   * @public
   * @async
   * @memberof FileController
   * @example
   * await controller.newLayout();
   *
   * @returns {Promise<void>} - No return value
   */
  async newLayout(path?: Uri): Promise<void> {
    // Get the relative path
    const folderPath: string = path ? await getRelativePath(path.path) : '';

    // Get the path to the folder
    const folder = await getPath(
      'Folder name',
      'Folder name. E.g. src, app...',
      folderPath,
      (path: string) => {
        if (!/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)) {
          return 'The folder name must be a valid name';
        }
        return;
      },
    );

    if (!folder) {
      return;
    }

    const content = `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
\ttitle: 'Create Next App',
\tdescription: 'Create Next App with TypeScript, Tailwind CSS, NextAuth, Prisma, tRPC, and more.',
}

export default function Layout({
\tchildren,
}: {
\tchildren: React.ReactNode
}) {
\treturn (
\t\t<html lang="en">
\t\t\t<body className={inter.className}>{children}</body>
\t\t</html>
\t)
}
`;

    const filename = `layout.tsx`;

    saveFile(folder, filename, content);
  }

  /**
   * Creates a new loading component.
   *
   * @function newLoading
   * @param {Uri} [path] - The path to the folder
   * @public
   * @async
   * @memberof FileController
   * @example
   * await controller.newLoading();
   *
   * @returns {Promise<void>} - No return value
   */
  async newLoading(path?: Uri): Promise<void> {
    // Get the relative path
    const folderPath: string = path ? await getRelativePath(path.path) : '';

    // Get the path to the folder
    const folder = await getPath(
      'Folder name',
      'Folder name. E.g. src, app...',
      folderPath,
      (path: string) => {
        if (!/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)) {
          return 'The folder name must be a valid name';
        }
        return;
      },
    );

    if (!folder) {
      return;
    }

    const content = `export default function Loading() {
\treturn <p>Loading...</p>
}
`;

    const filename = `loading.tsx`;

    saveFile(folder, filename, content);
  }

  /**
   * Creates a new page.
   *
   * @function newPage
   * @param {Uri} [path] - The path to the folder
   * @public
   * @async
   * @memberof FileController
   * @example
   * await controller.newPage();
   *
   * @returns {Promise<void>} - No return value
   */
  async newPage(path?: Uri): Promise<void> {
    // Get the relative path
    const folderPath: string = path ? await getRelativePath(path.path) : '';

    // Get the path to the folder
    const folder = await getPath(
      'Folder name',
      'Folder name. E.g. src, app...',
      folderPath,
      (path: string) => {
        if (!/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)) {
          return 'The folder name must be a valid name';
        }
        return;
      },
    );

    if (!folder) {
      return;
    }

    const content = `'use client'

interface Props {
\tparams: {
\t\tid: string;
\t};
}

export default function Page({ params }: Props) {
\tconst { id } = params;

\treturn (
\t\t<>
\t\t\t<h1>Page { id }</h1>
\t\t\t<p>Page content</p>
\t\t</>
\t);
}
`;

    const filename = `page.tsx`;

    saveFile(folder, filename, content);
  }

  /**
   * Creates a new auth.
   *
   * @function newNextAuth
   * @param {Uri} [path] - The path to the folder
   * @public
   * @async
   * @memberof FileController
   * @example
   * await controller.newNextAuth();
   *
   * @returns {Promise<void>} - No return value
   */
  async newNextAuth(path?: Uri): Promise<void> {
    // Get the relative path
    const folderPath: string = path ? await getRelativePath(path.path) : '';

    // Get the path to the folder
    const folder = await getPath(
      'Folder name',
      'Folder name. E.g. src, app...',
      folderPath,
      (path: string) => {
        if (!/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)) {
          return 'The folder name must be a valid name';
        }
        return;
      },
    );

    if (!folder) {
      return;
    }

    const content = `import NextAuth from 'next-auth';

export const authOptions = {
\tproviders: [
\t\t// Providers...
\t],
};

export default NextAuth(authOptions);
`;

    const filename = `[...nextauth].${this.config.extension}`;

    saveFile(folder, filename, content);
  }

  /**
   * Creates a new tRPC router.
   *
   * @function newTRPCRouter
   * @param {Uri} [path] - The path to the folder
   * @public
   * @async
   * @memberof FileController
   * @example
   * await controller.newTRPCRouter();
   *
   * @returns {Promise<void>} - No return value
   */
  async newTRPCRouter(path?: Uri): Promise<void> {
    // Get the relative path
    const folderPath: string = path ? await getRelativePath(path.path) : '';

    // Get the path to the folder
    const folder = await getPath(
      'Folder name',
      'Folder name. E.g. src, app...',
      folderPath,
      (path: string) => {
        if (!/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)) {
          return 'The folder name must be a valid name';
        }
        return;
      },
    );

    if (!folder) {
      return;
    }

    // Get the entity name
    let entityName = await getName(
      'Router name',
      'E.g. user, subscription, auth...',
      (text: string) => {
        if (!/^[a-z][\w-]+$/.test(text)) {
          return 'Invalid format! Entity names MUST be declared in camelCase.';
        }
        return;
      },
    );

    if (!entityName) {
      return;
    }

    const content = `import { z } from 'zod';

import {
\tcreateTRPCRouter,
\tprotectedProcedure,
\tpublicProcedure,
} from '${this.config.alias}/server/api/trpc';

export const ${entityName}Router = createTRPCRouter({
\t// prefix: t.procedure.input(callable).query(async (args) => handler(args)),
});
`;

    let type = '';

    if (this.config.showType) {
      type = 'router.';
    }

    const filename = `${dasherize(entityName)}.${type}${this.config.extension}`;

    saveFile(folder, filename, content);
  }

  /**
   * Creates a new tRPC controller.
   *
   * @function newTRPCController
   * @param {Uri} [path] - The path to the folder
   * @public
   * @async
   * @memberof FileController
   * @example
   * await controller.newTRPCController();
   *
   * @returns {Promise<void>} - No return value
   */
  async newTRPCController(path?: Uri): Promise<void> {
    // Get the relative path
    const folderPath: string = path ? await getRelativePath(path.path) : '';

    // Get the path to the folder
    const folder = await getPath(
      'Folder name',
      'Folder name. E.g. src, app...',
      folderPath,
      (path: string) => {
        if (!/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)) {
          return 'The folder name must be a valid name';
        }
        return;
      },
    );

    if (!folder) {
      return;
    }

    // Get the entity name
    let entityName = await getName(
      'Controller name',
      'E.g. user, subscription, auth...',
      (text: string) => {
        if (!/^[a-z][\w-]+$/.test(text)) {
          return 'Invalid format! Entity names MUST be declared in camelCase.';
        }
        return;
      },
    );

    if (!entityName) {
      return;
    }

    const content = `import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z, ZodError } from 'zod';

import {
\tcreateTRPCRouter,
\tprotectedProcedure,
\tpublicProcedure,
} from '${this.config.alias}/server/api/trpc';

export const getAll = async () => {
\ttry {
\t\t// ... your code goes here
\t} catch (error) {
\t\tif (error instanceof ZodError) {
\t\t\tthrow new TRPCError({
\t\t\t\tcode: 'BAD_REQUEST',
\t\t\t\tmessage: error.message,
\t\t\t});
\t\t}

\t\tif (error instanceof TRPCError) {
\t\t\tif (error.code === 'UNAUTHORIZED') {
\t\t\t\tthrow new TRPCError({
\t\t\t\t\tcode: 'UNAUTHORIZED',
\t\t\t\t\tmessage: 'Unauthorized',
\t\t\t\t});
\t\t\t}

\t\t\tthrow new TRPCError({
\t\t\t\tcode: 'INTERNAL_SERVER_ERROR',
\t\t\t\tmessage: error.message,
\t\t\t});
\t\t}
\t}
};
`;

    let type = '';

    if (this.config.showType) {
      type = 'controller.';
    }

    const filename = `${dasherize(entityName)}.${type}${this.config.extension}`;

    saveFile(folder, filename, content);
  }
}
