import {
  getClass,
  getFolder,
  parsePath,
  save,
  toKebabCase,
} from '../../utils/functions';

const content = `interface {{functionName}}Props {
  children: React.ReactNode;
}

export function {{functionName}}({ children }: {{functionName}}Props) {
  return (
    <>
      <h1>{{functionName}}</h1>
      {children}
    </>
  );
}
`;

const newComponent = async (
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
  const extension = nextConfig.get('.files.extension');

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

  const functionName = await getClass(
    vscode,
    'Component Name',
    'E.g. Title, Header, Main, Footer...',
  );

  const body = content.replace(/\{\{functionName\}\}/g, functionName);

  const filename =
    '/' + folder + toKebabCase(functionName) + '.' + (extension || 'ts');

  save(vscode, fs, path, filename, body);
};

export { newComponent };
