import { execute } from '../../utils/functions';

const start = (vscode: any) => {
  let resource;

  if (vscode.workspace.workspaceFolders) {
    resource = vscode.workspace.workspaceFolders[0].uri;
  }

  const nextConfig = vscode.workspace.getConfiguration('nextjs', resource);
  const turbo = nextConfig.get('server.turbo');

  execute(vscode, 'start', 'npx next dev' + (turbo ? ' --turbo' : ''));
};

export { start };
