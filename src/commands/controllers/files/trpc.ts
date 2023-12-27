import {
  getEntity,
  getFolder,
  parsePath,
  save,
  toKebabCase,
} from '../../utils/functions';

const newTRPCRouter = async (
  vscode: any,
  fs: any,
  path: any,
  args: any = null,
) => {
  const content = `import { z } from 'zod';

import {
\tcreateTRPCRouter,
\tprotectedProcedure,
\tpublicProcedure,
} from '{{alias}}/server/api/trpc';

export const {{entityName}}Router = createTRPCRouter({
\t// prefix: t.procedure.input(callable).query(async (args) => handler(args)),
});
`;

  let resource;

  if (vscode.workspace.workspaceFolders) {
    resource = vscode.workspace.workspaceFolders[0].uri;
  }

  const nextConfig = vscode.workspace.getConfiguration('nextjs', resource);
  const extension = nextConfig.get('files.extension');
  const showType = nextConfig.get('files.showType');
  const alias = nextConfig.get('files.alias');

  let relativePath = '';

  if (args) {
    relativePath = parsePath(vscode, path, args);
  }

  const folder = await getFolder(
    vscode,
    'Folder name',
    'Folder name. E.g. src, app...',
    relativePath,
  );

  let entityName = await getEntity(
    vscode,
    'Router name',
    'E.g. user, subscription, auth...',
  );

  const body = content
    .replace('{{entityName}}', entityName)
    .replace('{{alias}}', alias ? alias : '~');

  const filename =
    '/' +
    folder +
    toKebabCase(entityName) +
    '.' +
    (showType ? 'router.' : '') +
    (extension || 'ts');

  save(vscode, fs, path, filename, body);
};

const newTRPCController = async (
  vscode: any,
  fs: any,
  path: any,
  args: any = null,
) => {
  const content = `import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z, ZodError } from 'zod';

import {
\tcreateTRPCRouter,
\tprotectedProcedure,
\tpublicProcedure,
} from '{{alias}}/server/api/trpc';

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

  let resource;

  if (vscode.workspace.workspaceFolders) {
    resource = vscode.workspace.workspaceFolders[0].uri;
  }

  const nextConfig = vscode.workspace.getConfiguration('nextjs', resource);
  const extension = nextConfig.get('files.extension');
  const showType = nextConfig.get('files.showType');
  const alias = nextConfig.get('files.alias');

  let relativePath = '';

  if (args) {
    relativePath = parsePath(vscode, path, args);
  }

  const folder = await getFolder(
    vscode,
    'Folder name',
    'Folder name. E.g. src, app...',
    relativePath,
  );

  let entityName = await getEntity(
    vscode,
    'Controller name',
    'E.g. user, subscription, auth...',
  );

  const body = content
    .replace('{{entityName}}', entityName)
    .replace('{{alias}}', alias ? alias : '~');

  const filename =
    '/' +
    folder +
    toKebabCase(entityName) +
    '.' +
    (showType ? 'controller.' : '') +
    (extension || 'ts');

  save(vscode, fs, path, filename, body);
};

export { newTRPCController, newTRPCRouter };
