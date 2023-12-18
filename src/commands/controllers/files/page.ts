import { getClass, getFolder, parsePath, save } from '../../utils/functions';

const content = `'use client'

interface Props {
  params: {
    id: string;
  };
}

export default function {{functionName}}({ params }: Props) {
  const { id } = params;

  return (
    <>
      <h1>Page { id }</h1>
      <p>Page content</p>
    </>
  );
}
`;

const newPage = async (vscode: any, fs: any, path: any, args: any = null) => {
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
    'Page Name',
    'E.g. HomePage, IndexPage, Page...',
  );

  const body = content.replace(/\{\{functionName\}\}/g, functionName);

  const filename = '/' + folder + 'page.tsx';

  save(vscode, fs, path, filename, body);
};

export { newPage };
