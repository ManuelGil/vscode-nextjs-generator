import {
  getClass,
  getFolder,
  parsePath,
  save,
  toKebabCase,
} from '../../utils/functions';

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
  const extension = nextConfig.get('files.extension') ?? 'ts';
  const showType = nextConfig.get('files.showType');

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

  const content = `interface ${functionName}Props {
\tchildren: React.ReactNode;
}

export function ${functionName}({ children }: ${functionName}Props) {
\treturn (
\t\t<>
\t\t\t<h1>${functionName}</h1>
\t\t\t{children}
\t\t</>
\t);
}
`;

  let type = '';

  if (showType) {
    type = 'component.';
  }

  const filename = `/${folder}${toKebabCase(functionName)}.${type}tsx`;

  save(vscode, fs, path, filename, content);
};

export { newComponent };
