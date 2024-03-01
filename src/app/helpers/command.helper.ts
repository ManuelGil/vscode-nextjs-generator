import { window } from 'vscode';

/**
 * Runs a command in the terminal
 *
 * @param {string} title - Title of the terminal
 * @param {string} command - Command to run
 * @example
 * runCommand('echo "Hello, World!"');
 *
 * @returns {Promise<void>} - No return value
 */
export const runCommand = async (
  title: string,
  command: string,
): Promise<void> => {
  const terminal = window.createTerminal(title);
  terminal.show();
  terminal.sendText(command);
};
