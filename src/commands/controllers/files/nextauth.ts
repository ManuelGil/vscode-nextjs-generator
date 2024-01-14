import { getFolder, parsePath, save } from '../../utils/functions';

const newNextAuth = async (
  vscode: any,
  fs: any,
  path: any,
  args: any = null,
) => {
  let resource;

  if (vscode.workspace.workspaceFolders) {
    resource = vscode.workspace.workspaceFolders[0].uri;
  }

  const nextConfig = vscode.workspace.getConfiguration('nextjs', resource);
  const extension = nextConfig.get('files.extension') ?? 'ts';

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

  const filename = `/${folder}[...nextauth].${extension}`;

  const content = `import NextAuth from 'next-auth';

export const authOptions = {
\tproviders: [
\t\t// Providers...
\t],
};

export default NextAuth(authOptions);
`;

  save(vscode, fs, path, filename, content);
};

export { newNextAuth };
