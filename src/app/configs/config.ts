import { WorkspaceConfiguration } from 'vscode';

import {
  ALIAS,
  EXCLUDE,
  EXPERIMENTAL_HTTPS,
  EXTENSION,
  INCLUDE,
  SHOW_PATH,
  SHOW_TYPE,
  TURBO,
  WATCH,
} from './constants';

/**
 * The Config class.
 *
 * @class
 * @classdesc The class that represents the configuration of the extension.
 * @export
 * @public
 * @property {WorkspaceConfiguration} config - The workspace configuration
 * @property {string[]} include - The files to include
 * @property {string[]} exclude - The files to exclude
 * @property {string[]} watch - The files to watch
 * @example
 * const config = new Config(workspace.getConfiguration());
 * console.log(config.include);
 * console.log(config.exclude);
 */
export class Config {
  // -----------------------------------------------------------------
  // Properties
  // -----------------------------------------------------------------

  // Public properties
  /**
   * The default import alias.
   * @type {string}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.alias);
   */
  alias: string;
  /**
   * The file extension.
   * @type {string}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.extension);
   */
  extension: string;
  /**
   * Whether to show the type or not.
   * @type {boolean}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.showType);
   */
  showType: boolean;
  /**
   * The files to include.
   * @type {string[]}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.include);
   */
  include: string[];
  /**
   * The files to exclude.
   * @type {string[]}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.exclude);
   */
  exclude: string[];
  /**
   * The files to watch.
   * @type {string[]}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.watch);
   */
  watch: string[];
  /**
   * Whether to show the path or not.
   * @type {boolean}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.showPath);
   */
  showPath: boolean;
  /**
   * Whether to use turbo or not.
   * @type {boolean}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.turbo);
   */
  turbo: boolean;
  /**
   * Whether to use experimental https or not.
   * @type {boolean}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.experimentalHttps);
   */
  experimentalHttps: boolean;

  // -----------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------

  /**
   * Constructor for the Config class.
   *
   * @constructor
   * @param {WorkspaceConfiguration} config - The workspace configuration
   * @public
   * @memberof Config
   */
  constructor(readonly config: WorkspaceConfiguration) {
    this.alias = config.get<string>('files.alias') ?? ALIAS;
    this.extension = config.get<string>('files.extension') ?? EXTENSION;
    this.showType = config.get<boolean>('files.showType') ?? SHOW_TYPE;
    this.include = config.get<string[]>('files.include') ?? INCLUDE;
    this.exclude = config.get<string[]>('files.exclude') ?? EXCLUDE;
    this.watch = config.get<string[]>('files.watch') ?? WATCH;
    this.showPath = config.get<boolean>('files.showPath') ?? SHOW_PATH;
    this.turbo = config.get<boolean>('server.turbo') ?? TURBO;
    this.experimentalHttps =
      config.get<boolean>('server.experimentalHttps') ?? EXPERIMENTAL_HTTPS;
  }
}
