import { execute } from '../../utils/functions';

const drizzleGenerate = async (vscode: any) => {
  const type = await vscode.window.showQuickPick(['pg', 'mysql', 'sqlite'], {
    placeHolder:
      'For which database do you want to  the Drizzle schema migration?',
  });

  if (type.length === 0) {
    return;
  }

  execute(vscode, 'drizzle-kit generate', `npx drizzle-kit generate:${type}`);
};

const drizzlePull = async (vscode: any) => {
  const type = await vscode.window.showQuickPick(['pg', 'mysql', 'sqlite'], {
    placeHolder: 'From which database do you want to pull the Drizzle schema?',
  });

  if (type.length === 0) {
    return;
  }

  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder:
      'Are you sure you want to pull the Drizzle schema to the database?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'drizzle-kit pull', `npx drizzle-kit pull:${type}`);
};

const drizzlePush = async (vscode: any) => {
  const type = await vscode.window.showQuickPick(['pg', 'mysql', 'sqlite'], {
    placeHolder: 'To which database do you want to push the Drizzle schema?',
  });

  if (type.length === 0) {
    return;
  }

  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder:
      'Are you sure you want to push the Drizzle schema to the database?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'drizzle-kit push', `npx drizzle-kit push:${type}`);
};

const drizzleDrop = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder:
      'Are you sure you want to drop the Drizzle schema to the database?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'drizzle-kit drop', 'npx drizzle-kit drop');
};

const drizzleUp = async (vscode: any) => {
  const type = await vscode.window.showQuickPick(['pg', 'mysql', 'sqlite'], {
    placeHolder: 'To which database do you want to migrate the Drizzle schema?',
  });

  if (type.length === 0) {
    return;
  }

  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder:
      'Are you sure you want to migrate the Drizzle schema to the database?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'drizzle-kit up', `npx drizzle-kit up:${type}`);
};

const drizzleCkeck = async (vscode: any) => {
  const type = await vscode.window.showQuickPick(['pg', 'mysql', 'sqlite'], {
    placeHolder:
      'For which database do you want to check the Drizzle schema migration?',
  });

  if (type.length === 0) {
    return;
  }

  execute(vscode, 'drizzle-kit check', `npx drizzle-kit check:${type}`);
};

const drizzleStudio = (vscode: any) => {
  execute(vscode, 'drizzle-kit studio', 'npx drizzle-kit studio');
};

export {
  drizzleCkeck,
  drizzleDrop,
  drizzleGenerate,
  drizzlePull,
  drizzlePush,
  drizzleStudio,
  drizzleUp,
};
