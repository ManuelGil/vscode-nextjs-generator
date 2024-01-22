import { execute } from '../../utils/functions';

const prismaExecute = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder:
      'Are you sure you want to execute the Prisma schema to the database?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma db execute', 'npx prisma db execute');
};

const prismaPull = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder:
      'Are you sure you want to pull the Prisma schema to the database?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma db pull', 'npx prisma db pull');
};

const prismaPush = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder:
      'Are you sure you want to push the Prisma schema to the database?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma db push', 'npx prisma db push');
};

const prismaSeed = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder:
      'Are you sure you want to seed the Prisma schema to the database?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma db seed', 'npx prisma db seed');
};

const prismaFormat = (vscode: any) => {
  execute(vscode, 'prisma format', 'npx prisma format');
};

const prismaGenerate = (vscode: any) => {
  execute(vscode, 'prisma generate', 'npx prisma generate');
};

const prismaInit = (vscode: any) => {
  execute(vscode, 'prisma init', 'npx prisma init');
};

const prismaMigrateDeploy = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder: 'Are you sure you want to deploy the Prisma schema?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma migrate deploy', 'npx prisma migrate deploy');
};

const prismaMigrateDev = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder: 'Are you sure you want to migrate the Prisma schema?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma migrate dev', 'npx prisma migrate dev');
};

const prismaMigrateReset = async (vscode: any) => {
  const confirm = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder: 'Are you sure you want to reset the Prisma schema?',
  });

  if (confirm.length === 0 || confirm === 'No') {
    return;
  }

  execute(vscode, 'prisma migrate reset', 'npx prisma migrate reset');
};

const prismaMigrateStatus = (vscode: any) => {
  execute(vscode, 'prisma migrate status', 'npx prisma migrate status');
};

const prismaStudio = (vscode: any) => {
  execute(vscode, 'prisma studio', 'npx prisma studio');
};

const prismaValidate = (vscode: any) => {
  execute(vscode, 'prisma validate', 'npx prisma validate');
};

export {
  prismaExecute,
  prismaFormat,
  prismaGenerate,
  prismaInit,
  prismaMigrateDeploy,
  prismaMigrateDev,
  prismaMigrateReset,
  prismaMigrateStatus,
  prismaPull,
  prismaPush,
  prismaSeed,
  prismaStudio,
  prismaValidate,
};
