import { getFolder, parsePath, save } from '../../utils/functions';

const content = `'use client'

interface Props {
\tparams: {
\t\tid: string;
\t};
}

export default function Page({ params }: Props) {
\tconst { id } = params;

\treturn (
\t\t<>
\t\t\t<h1>Page { id }</h1>
\t\t\t<p>Page content</p>
\t\t</>
\t);
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

  const filename = '/' + folder + 'page.tsx';

  save(vscode, fs, path, filename, content);
};

export { newPage };
