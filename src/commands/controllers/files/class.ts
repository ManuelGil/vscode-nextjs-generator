import {
  getClass,
  getFolder,
  getType,
  parsePath,
  save,
  toCapitalize,
  toKebabCase,
} from '../../utils/functions';

const content = `export default {{type}} {{className}} {}
`;

const newClass = async (vscode: any, fs: any, path: any, args: any = null) => {
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

  const type = await getType(
    vscode,
    'Type',
    'E.g. class, interface, type, enum...',
  );

  if (type.length === 0) {
    return;
  }

  const className = await getClass(vscode, 'Name', 'E.g. User, Role, Post...');

  const body = content
    .replace('{{type}}', type)
    .replace('{{className}}', className + toCapitalize(type));

  const filename = '/' + folder + toKebabCase(className) + '.' + extension;

  save(vscode, fs, path, filename, body);
};

export { newClass };
