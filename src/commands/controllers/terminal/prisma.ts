import { execute } from '../../utils/functions';

const dbExecute = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder:
      'Are you sure you want to execute the Prisma schema to the database?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma db execute', 'npx prisma db execute');
};

const dbPull = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder:
      'Are you sure you want to pull the Prisma schema to the database?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma db pull', 'npx prisma db pull');
};

const dbPush = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder:
      'Are you sure you want to push the Prisma schema to the database?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma db push', 'npx prisma db push');
};

const dbSeed = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder:
      'Are you sure you want to seed the Prisma schema to the database?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma db seed', 'npx prisma db seed');
};

const format = (vscode: any) => {
  execute(vscode, 'prisma format', 'npx prisma format');
};

const generate = (vscode: any) => {
  execute(vscode, 'prisma generate', 'npx prisma generate');
};

const init = (vscode: any) => {
  execute(vscode, 'prisma init', 'npx prisma init');
};

const migrateDeploy = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder: 'Are you sure you want to deploy the Prisma schema?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma migrate deploy', 'npx prisma migrate deploy');
};

const migrateDev = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder: 'Are you sure you want to migrate the Prisma schema?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma migrate dev', 'npx prisma migrate dev');
};

const migrateReset = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder: 'Are you sure you want to reset the Prisma schema?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma migrate reset', 'npx prisma migrate reset');
};

const migrateStatus = (vscode: any) => {
  execute(vscode, 'prisma migrate status', 'npx prisma migrate status');
};

const studio = (vscode: any) => {
  execute(vscode, 'prisma studio', 'npx prisma studio');
};

const validate = (vscode: any) => {
  execute(vscode, 'prisma validate', 'npx prisma validate');
};

export {
  dbExecute,
  dbPull,
  dbPush,
  dbSeed,
  format,
  generate,
  init,
  migrateDeploy,
  migrateDev,
  migrateReset,
  migrateStatus,
  studio,
  validate,
};
