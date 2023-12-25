import { execute } from '../../utils/functions';

const newProject = async (vscode: any) => {
  if (!vscode.workspace.workspaceFolders) {
    vscode.window.showErrorMessage('The project has not been created!');
    return;
  }

  const type = await vscode.window.showQuickPick(
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

  const manager = await vscode.window.showQuickPick(
    ['npm', 'yarn', 'pnpm', 'bun'],
    {
      placeHolder: 'Which package manager do you want to use?',
    },
  );

  if (!manager) {
    return;
  }

  switch (type.label) {
    case 'create-vite-app':
      const viteType = await vscode.window.showQuickPick(
        [
          {
            label: 'react',
            description: 'Create a new project with React and Vite',
          },
          {
            label: 'react-ts',
            description: 'Create a new project with React, TypeScript and Vite',
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

      switch (manager) {
        case 'npm':
          execute(
            vscode,
            type.label,
            'npm create vite@latest . -- --template ' + viteType.label,
          );
          break;

        case 'yarn':
          execute(
            vscode,
            type.label,
            'yarn create vite . --template ' + viteType.label,
          );
          break;

        case 'pnpm':
          execute(
            vscode,
            type.label,
            'pnpm create vite . --template ' + viteType.label,
          );
          break;

        case 'bun':
          execute(
            vscode,
            type.label,
            'bunx create-vite . --template ' + viteType.label,
          );
          break;
      }

      break;

    case 'create-next-app':
      switch (manager) {
        case 'npm':
          execute(vscode, type.label, 'npx create-next-app@latest .');
          break;

        case 'yarn':
          execute(vscode, type.label, 'yarn create next-app .');
          break;

        case 'pnpm':
          execute(vscode, type.label, 'pnpm create next-app .');
          break;

        case 'bun':
          execute(vscode, type.label, 'bunx create-next-app .');
          break;
      }

      break;

    case 'create-t3-app':
      switch (manager) {
        case 'npm':
          execute(vscode, type.label, 'npm create t3-app@latest .');
          break;

        case 'yarn':
          execute(vscode, type.label, 'yarn create t3-app .');
          break;

        case 'pnpm':
          execute(vscode, type.label, 'pnpm create t3-app@latest .');
          break;

        case 'bun':
          execute(vscode, type.label, 'bun create t3-app@latest .');
          break;
      }

      break;
  }
};

export { newProject };
