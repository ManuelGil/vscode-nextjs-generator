const getClass = async (vscode: any, prompt: string, placeHolder: string) => {
  const name = await vscode.window.showInputBox({
    prompt,
    placeHolder,
    validateInput: (text: string) => {
      if (!/^[A-Z][A-Za-z]{2,}$/.test(text)) {
        return 'Invalid format! Class names MUST be declared in PascalCase.';
      }
    },
  });

  if (name.length === 0) {
    return;
  }

  return name;
};

const getFolder = async (
  vscode: any,
  prompt: string,
  placeHolder: string,
  value: string,
) => {
  const folder = await vscode.window.showInputBox({
    prompt,
    placeHolder,
    validateInput: (text: string) => {
      if (!/^[A-Za-z][\w\s\/-]+$/.test(text)) {
        return 'Invalid format!';
      }
    },
    value,
  });

  return folder.endsWith('/') ? folder : folder + '/';
};

const getType = async (vscode: any, prompt: string, placeHolder: string) => {
  return await vscode.window.showInputBox({
    prompt,
    placeHolder,
    validateInput: (text: string) => {
      if (!/[a-z]+/.test(text)) {
        return 'Invalid format!';
      }
    },
  });
};

const save = (
  vscode: any,
  fs: any,
  path: any,
  filename: string,
  content: string,
  show: boolean = true,
) => {
  let folder;

  if (vscode.workspace.workspaceFolders) {
    folder = vscode.workspace.workspaceFolders[0].uri.fsPath;
  } else {
    vscode.window.showErrorMessage('The file has not been created!');
    return;
  }

  const pathfile = path.join(folder, filename);

  if (!fs.existsSync(path.dirname(pathfile))) {
    fs.mkdirSync(path.dirname(pathfile), { recursive: true });
  }

  fs.access(pathfile, (err: any) => {
    if (err) {
      fs.open(pathfile, 'w+', (err: any, fd: any) => {
        if (err) {
          throw err;
        }

        fs.writeFileSync(fd, content);

        if (show === true) {
          const openPath = vscode.Uri.file(pathfile);
          vscode.workspace
            .openTextDocument(openPath)
            .then((filename: string) => {
              vscode.window.showTextDocument(filename);
            });
        }
      });

      vscode.window.showInformationMessage('Successfully created the file!');
    } else {
      vscode.window.showWarningMessage('Name already exist!');
    }
  });
};

const execute = (
  vscode: any,
  name: string,
  command: string,
  show: boolean = true,
) => {
  const terminal = vscode.window.createTerminal({
    name: name,
    hideFromUser: !show,
  });
  terminal.sendText(command);
  vscode.window.showInformationMessage(`Running: ${command}`);

  if (show) {
    terminal.show();
  }
};

const parsePath = (vscode: any, path: any, args: any) => {
  let folder = '';

  if (vscode.workspace.workspaceFolders) {
    folder = vscode.workspace.workspaceFolders[0].uri.fsPath;
  }

  if (process.platform === 'win32') {
    folder = folder.replace(/\\/g, '/');
  }

  folder = folder.startsWith('/') ? folder : '/' + folder;

  return path.posix.relative(folder, args.path);
};

const toCapitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const toKebabCase = (text: string) => {
  return text
    .replace(/[A-Z]/g, (letter: string) => `-${letter}`)
    .slice(1)
    .toLowerCase();
};

export {
  execute,
  getClass,
  getFolder,
  getType,
  parsePath,
  save,
  toCapitalize,
  toKebabCase,
};
