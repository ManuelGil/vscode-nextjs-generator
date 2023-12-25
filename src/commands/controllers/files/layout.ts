import { getFolder, parsePath, save } from '../../utils/functions';

const content = `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
\ttitle: 'Create Next App',
\tdescription: 'Create Next App with TypeScript, Tailwind CSS, NextAuth, Prisma, tRPC, and more.',
}

export default function Layout({
\tchildren,
}: {
\tchildren: React.ReactNode
}) {
\treturn (
\t\t<html lang="en">
\t\t\t<body className={inter.className}>{children}</body>
\t\t</html>
\t)
}
`;

const newLayout = async (vscode: any, fs: any, path: any, args: any = null) => {
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

  const filename = '/' + folder + 'layout.tsx';

  save(vscode, fs, path, filename, content);
};

export { newLayout };
