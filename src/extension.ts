import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

import {
  dbExecute,
  dbPull,
  dbPush,
  dbSeed,
  format,
  generate,
  init,
  json2ts,
  json2zod,
  migrateDeploy,
  migrateDev,
  migrateReset,
  migrateStatus,
  newClass,
  newComponent,
  newLayout,
  newLoading,
  newNextAuth,
  newPage,
  newProject,
  newTRPCController,
  newTRPCRouter,
  start,
  studio,
  validate,
} from './commands';

export function activate(context: vscode.ExtensionContext) {
  const nextjsFileClass = vscode.commands.registerCommand(
    'nextjs.file.class',
    (args) => newClass(vscode, fs, path, args),
  );
  const nextjsFileComponent = vscode.commands.registerCommand(
    'nextjs.file.component',
    (args) => newComponent(vscode, fs, path, args),
  );
  const nextjsFileLayout = vscode.commands.registerCommand(
    'nextjs.file.layout',
    (args) => newLayout(vscode, fs, path, args),
  );
  const nextjsFileLoading = vscode.commands.registerCommand(
    'nextjs.file.loading',
    (args) => newLoading(vscode, fs, path, args),
  );
  const nextjsFilePage = vscode.commands.registerCommand(
    'nextjs.file.page',
    (args) => newPage(vscode, fs, path, args),
  );
  const nextjsFileNextAuth = vscode.commands.registerCommand(
    'nextjs.file.nextauth',
    (args) => newNextAuth(vscode, fs, path, args),
  );
  const nextjsFileTRPCRouter = vscode.commands.registerCommand(
    'nextjs.file.trpc.router',
    (args) => newTRPCRouter(vscode, fs, path, args),
  );
  const nextjsFileTRPCController = vscode.commands.registerCommand(
    'nextjs.file.trpc.controller',
    (args) => newTRPCController(vscode, fs, path, args),
  );
  const nextjsTerminalNewProject = vscode.commands.registerCommand(
    'nextjs.terminal.project',
    () => newProject(vscode),
  );
  const nextTerminalPrismaDbExecute = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.db.execute',
    () => dbExecute(vscode),
  );
  const nextTerminalPrismaDbPull = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.db.pull',
    () => dbPull(vscode),
  );
  const nextTerminalPrismaDbPush = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.db.push',
    () => dbPush(vscode),
  );
  const nextTerminalPrismaDbSeed = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.db.seed',
    () => dbSeed(vscode),
  );
  const nextTerminalPrismaFormat = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.format',
    () => format(vscode),
  );
  const nextTerminalPrismaGenerate = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.generate',
    () => generate(vscode),
  );
  const nextTerminalPrismaInit = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.init',
    () => init(vscode),
  );
  const nextTerminalPrismaMigrateDeploy = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.migrate.deploy',
    () => migrateDeploy(vscode),
  );
  const nextTerminalPrismaMigrateDev = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.migrate.dev',
    () => migrateDev(vscode),
  );
  const nextTerminalPrismaMigrateReset = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.migrate.reset',
    () => migrateReset(vscode),
  );
  const nextTerminalPrismaMigrateStatus = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.migrate.status',
    () => migrateStatus(vscode),
  );
  const nextTerminalPrismaStudio = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.studio',
    () => studio(vscode),
  );
  const nextTerminalPrismaValidate = vscode.commands.registerCommand(
    'nextjs.terminal.prisma.validate',
    () => validate(vscode),
  );
  const nextjsTerminalStart = vscode.commands.registerCommand(
    'nextjs.terminal.start',
    () => start(vscode),
  );
  const nextjsEditorJson2Ts = vscode.commands.registerCommand(
    'nextjs.editor.json.ts',
    () => json2ts(vscode),
  );
  const nextjsEditorJson2Zod = vscode.commands.registerCommand(
    'nextjs.editor.json.zod',
    () => json2zod(vscode),
  );

  context.subscriptions.push(nextjsFileClass);
  context.subscriptions.push(nextjsFileComponent);
  context.subscriptions.push(nextjsFileLayout);
  context.subscriptions.push(nextjsFileLoading);
  context.subscriptions.push(nextjsFilePage);
  context.subscriptions.push(nextjsFileNextAuth);
  context.subscriptions.push(nextjsFileTRPCRouter);
  context.subscriptions.push(nextjsFileTRPCController);
  context.subscriptions.push(nextjsTerminalNewProject);
  context.subscriptions.push(nextTerminalPrismaDbExecute);
  context.subscriptions.push(nextTerminalPrismaDbPull);
  context.subscriptions.push(nextTerminalPrismaDbPush);
  context.subscriptions.push(nextTerminalPrismaDbSeed);
  context.subscriptions.push(nextTerminalPrismaFormat);
  context.subscriptions.push(nextTerminalPrismaGenerate);
  context.subscriptions.push(nextTerminalPrismaInit);
  context.subscriptions.push(nextTerminalPrismaMigrateDeploy);
  context.subscriptions.push(nextTerminalPrismaMigrateDev);
  context.subscriptions.push(nextTerminalPrismaMigrateReset);
  context.subscriptions.push(nextTerminalPrismaMigrateStatus);
  context.subscriptions.push(nextTerminalPrismaStudio);
  context.subscriptions.push(nextTerminalPrismaValidate);
  context.subscriptions.push(nextjsTerminalStart);
  context.subscriptions.push(nextjsEditorJson2Ts);
  context.subscriptions.push(nextjsEditorJson2Zod);
}

export function deactivate() {}
