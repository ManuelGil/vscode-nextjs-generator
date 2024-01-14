import {
  getClass,
  getFolder,
  getType,
  parsePath,
  save,
  toCapitalize,
  toKebabCase,
} from '../../utils/functions';

const newClass = async (vscode: any, fs: any, path: any, args: any = null) => {
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

  let type = await getType(
    vscode,
    'Type',
    'E.g. class, interface, type, enum...',
  );

  if (type.length === 0) {
    return;
  }

  const className = await getClass(vscode, 'Name', 'E.g. User, Role, Post...');

  const content = `export default ${type} ${className}${toCapitalize(type)} {
\t// ... your code goes here
}
`;

  if (showType) {
    type += '.';
  } else {
    type = '';
  }

  const filename = `/${folder}${toKebabCase(className)}.${type}${extension}`;

  save(vscode, fs, path, filename, content);
};

export { newClass };
