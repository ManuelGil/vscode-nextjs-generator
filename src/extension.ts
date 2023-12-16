import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

import {
  newClass,
  newComponent,
  newLayout,
  newLoading,
  newPage,
  newProject,
  start,
} from './commands';

export function activate(context: vscode.ExtensionContext) {
  const nextjsFileClass = vscode.commands.registerCommand(
    'nextjs.file.class',
    (args) => {
      newClass(vscode, fs, path, args);
    },
  );
  const nextjsFileComponent = vscode.commands.registerCommand(
    'nextjs.file.component',
    (args) => {
      newComponent(vscode, fs, path, args);
    },
  );
  const nextjsFileLayout = vscode.commands.registerCommand(
    'nextjs.file.layout',
    (args) => {
      newLayout(vscode, fs, path, args);
    },
  );
  const nextjsFileLoading = vscode.commands.registerCommand(
    'nextjs.file.loading',
    (args) => {
      newLoading(vscode, fs, path, args);
    },
  );
  const nextjsFilePage = vscode.commands.registerCommand(
    'nextjs.file.page',
    (args) => {
      newPage(vscode, fs, path, args);
    },
  );
  const nextjsTerminalNewProject = vscode.commands.registerCommand(
    'nextjs.terminal.project',
    () => {
      newProject(vscode);
    },
  );
  const nextjsTerminalStart = vscode.commands.registerCommand(
    'nextjs.terminal.start',
    () => {
      start(vscode);
    },
  );

  context.subscriptions.push(nextjsFileClass);
  context.subscriptions.push(nextjsFileComponent);
  context.subscriptions.push(nextjsFileLayout);
  context.subscriptions.push(nextjsFileLoading);
  context.subscriptions.push(nextjsFilePage);
  context.subscriptions.push(nextjsTerminalNewProject);
  context.subscriptions.push(nextjsTerminalStart);
}

export function deactivate() {}
