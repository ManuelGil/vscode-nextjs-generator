import jsonSchemaToZod from 'json-schema-to-zod';
import JsonToTS from 'json-to-ts';
import { Range, TextEditor, window, workspace } from 'vscode';

// Import the helper functions
import { showError } from '../helpers';

/**
 * The TransformController class.
 *
 * @class
 * @classdesc The class that represents the example controller.
 * @export
 * @public
 * @example
 * const controller = new TransformController(config);
 */
export class TransformController {
  // -----------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------

  /**
   * Constructor for the TransformController class.
   *
   * @constructor
   * @public
   * @memberof TransformController
   */
  constructor() {}

  // -----------------------------------------------------------------
  // Methods
  // -----------------------------------------------------------------

  // Public methods
  /**
   * The json2ts method.
   *
   * @function json2ts
   * @public
   * @async
   * @memberof TransformController
   * @example
   * await controller.json2ts();
   *
   * @returns {Promise<TextEditor | void>} The result
   */
  async json2ts(): Promise<TextEditor | void> {
    let editor;

    if (workspace.workspaceFolders) {
      editor = window.activeTextEditor;
    } else {
      showError('No text editor is active.');
      return;
    }

    const selection = editor?.selection;

    if (selection && !selection.isEmpty) {
      const selectionRange = new Range(
        selection.start.line,
        selection.start.character,
        selection.end.line,
        selection.end.character,
      );

      const text = editor?.document.getText(selectionRange) || '';

      const jsonSchema = this.tryParseJSONObject(text);

      if (!jsonSchema) {
        showError('Invalid JSON Schema!');
        return;
      }

      const tsSchema = JsonToTS(jsonSchema)
        .map((itf) => `export ${itf}\n`)
        .join('\n');

      const document = await workspace.openTextDocument({
        language: 'typescript',
        content: tsSchema,
      });

      return await window.showTextDocument(document);
    }

    showError('No text is selected!');
    return;
  }

  /**
   * The json2zod method.
   *
   * @function json2zod
   * @public
   * @async
   * @memberof TransformController
   * @example
   * await controller.json2zod();
   *
   * @returns {Promise<TextEditor | void>} The result
   */
  async json2zod(): Promise<TextEditor | void> {
    let editor;

    if (workspace.workspaceFolders) {
      editor = window.activeTextEditor;
    } else {
      showError('No text editor is active.');
      return;
    }

    const selection = editor?.selection;

    if (selection && !selection.isEmpty) {
      const selectionRange = new Range(
        selection.start.line,
        selection.start.character,
        selection.end.line,
        selection.end.character,
      );

      const text = editor?.document.getText(selectionRange) || '';

      const jsonSchema = this.tryParseJSONObject(text);

      if (!jsonSchema) {
        showError('Invalid JSON Schema!');
        return;
      }

      const zodSchema = jsonSchemaToZod(jsonSchema);

      const content = `import { z } from 'zod';

export default ${zodSchema};
`;

      const document = await workspace.openTextDocument({
        language: 'typescript',
        content,
      });

      return await window.showTextDocument(document);
    }

    showError('No text is selected!');
    return;
  }

  // Private methods
  /**
   * The tryParseJSONObject method.
   *
   * @private
   * @memberof TransformController
   * @param {string} str - The string to parse
   * @returns {boolean | object} The result
   * @example
   * const object = controller.tryParseJSONObject(str);
   *
   * @returns {boolean | object} The result
   */
  private tryParseJSONObject(str: string): boolean | object {
    try {
      var object = JSON.parse(str);

      if (object && typeof object === 'object') {
        return object;
      }
    } catch (e) {
      return false;
    }

    return false;
  }
}
