import { getClass, getFolder, parsePath, save } from '../../utils/functions';

const content = `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Create Next App with TypeScript, Tailwind CSS, NextAuth, Prisma, tRPC, and more.',
}

export default function {{functionName}}({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
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

  const functionName = await getClass(
    vscode,
    'Layout Name',
    'E.g. RootLayout, AppLayout, Layout...',
  );

  const body = content.replace(/\{\{functionName\}\}/g, functionName);

  const filename = '/' + folder + 'layout.tsx';

  save(vscode, fs, path, filename, body);
};

export { newLayout };
