import { jsonSchemaToZod } from 'json-schema-to-zod';

import { tryParseJSONObject } from '../../utils/functions';

const json2zod = async (vscode: any) => {
  let editor;

  if (vscode.workspace.workspaceFolders) {
    editor = vscode.window.activeTextEditor;
  } else {
    vscode.window.showErrorMessage('No text editor is active.');
    return;
  }

  const selection = editor.selection;

  if (selection && !selection.isEmpty) {
    const selectionRange = new vscode.Range(
      selection.start.line,
      selection.start.character,
      selection.end.line,
      selection.end.character,
    );

    const text = editor.document.getText(selectionRange);

    const jsonSchema = tryParseJSONObject(text);

    if (!jsonSchema) {
      vscode.window.showErrorMessage('Invalid JSON Schema!');
      return;
    }

    const zodSchema = jsonSchemaToZod(jsonSchema);

    const content = `import { z } from 'zod';

export default ${zodSchema};
`;

    const document = await vscode.workspace.openTextDocument({
      language: 'typescript',
      content,
    });

    return await vscode.window.showTextDocument(document);
  }
};

export { json2zod };
