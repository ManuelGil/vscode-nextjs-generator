import { getFolder, parsePath, save } from '../../utils/functions';

const newLoading = async (
  vscode: any,
  fs: any,
  path: any,
  args: any = null,
) => {
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

  const filename = `/${folder}loading.tsx`;

  const content = `export default function Loading() {
\treturn <p>Loading...</p>
}
`;

  save(vscode, fs, path, filename, content);
};

export { newLoading };
