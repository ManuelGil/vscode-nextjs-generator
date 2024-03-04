/**
 * EXTENSION_ID: The unique identifier of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_ID);
 *
 * @returns {string} - The unique identifier of the extension
 */
export const EXTENSION_ID = 'nextjs';

/**
 * EXTENSION_NAME: The name of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_NAME);
 *
 * @returns {string} - The name of the extension
 */
export const EXTENSION_NAME = 'T3 Stack / NextJS / ReactJS File Generator';

/**
 * EXTENSION_HOMEPAGE_URL: The homepage URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_HOMEPAGE_URL);
 *
 * @returns {string} - The homepage URL of the extension
 */
export const EXTENSION_HOMEPAGE_URL =
  'https://github.com/ManuelGil/vscode-nextjs-generator#readme';

/**
 * EXTENSION_REPOSITORY_URL: The repository URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_REPOSITORY_URL);
 *
 * @returns {string} - The repository URL of the extension
 */
export const EXTENSION_REPOSITORY_URL =
  'https://github.com/ManuelGil/vscode-nextjs-generator';

/**
 * EXTENSION_MARKETPLACE_URL: The marketplace URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_MARKETPLACE_URL);
 *
 * @returns {string} - The marketplace URL of the extension
 */
export const EXTENSION_MARKETPLACE_URL =
  'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator';

/**
 * EXTENSION_BUGS_URL: The bugs URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_BUGS_URL);
 *
 * @returns {string} - The bugs URL of the extension
 */
export const EXTENSION_BUGS_URL =
  'https://github.com/ManuelGil/vscode-nextjs-generator/issues';

/**
 * EXTENSION_SPONSOR_URL: The sponsor URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_SPONSOR_URL);
 *
 * @returns {string} - The sponsor URL of the extension
 */
export const EXTENSION_SPONSOR_URL = 'https://github.com/sponsors/ManuelGil';

/**
 * EXTENSION_PAYPAL_URL: The PayPal URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_PAYPAL_URL);
 *
 * @returns {string} - The PayPal URL of the extension
 */
export const EXTENSION_PAYPAL_URL =
  'https://www.paypal.com/paypalme/ManuelFGil';

/**
 * ALIAS: The default import alias.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(ALIAS);
 *
 * @returns {string} - The default import alias
 */
export const ALIAS = '~';

/**
 * EXTENSION: The file extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION);
 *
 * @returns {string} - The file extension
 */
export const EXTENSION = 'tsx';

/**
 * SHOW_TYPE: Whether to show the type or not.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(SHOW_TYPE);
 *
 * @returns {boolean} - Whether to show the type or not
 */
export const SHOW_TYPE = true;

/**
 * INCLUDE: The files to include.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(INCLUDE);
 *
 * @returns {string[]} - The files to include
 */
export const INCLUDE = ['js', 'jsx', 'ts', 'tsx'];
/**
 * EXCLUDE: The files to exclude.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXCLUDE);
 *
 * @returns {string[]} - The files to exclude
 */
export const EXCLUDE = [
  '**/node_modules/**',
  '**/dist/**',
  '**/out/**',
  '**/build/**',
  '**/.*/**',
];

/**
 * WATCH: The files to watch.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(WATCH);
 *
 * @returns {string[]} - The files to watch
 */
export const WATCH = ['modules', 'components', 'services'];

/**
 * SHOW_PATH: Whether to show the path or not.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(SHOW_PATH);
 *
 * @returns {boolean} - Whether to show the path or not
 */
export const SHOW_PATH = true;

/**
 * TURBO: Whether to use turbo or not.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(TURBO);
 *
 * @returns {boolean} - Whether to use turbo or not
 */
export const TURBO = true;

/**
 * EXPERIMENTAL_HTTPS: Whether to use experimental HTTPS or not.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXPERIMENTAL_HTTPS);
 *
 * @returns {boolean} - Whether to use experimental HTTPS or not
 */
export const EXPERIMENTAL_HTTPS = false;
