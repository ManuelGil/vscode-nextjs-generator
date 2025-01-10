import * as vscode from 'vscode';

import {
  Config,
  EXTENSION_ID,
  EXTENSION_NAME,
  EXTENSION_REPOSITORY_URL,
} from './app/configs';
import {
  FeedbackController,
  FileController,
  ListFilesController,
  TerminalController,
  TransformController,
} from './app/controllers';
import {
  FeedbackProvider,
  ListComponentsProvider,
  ListFilesProvider,
  ListHooksProvider,
  ListRoutesProvider,
} from './app/providers';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  // The code you place here will be executed every time your command is executed
  let resource: vscode.WorkspaceFolder | undefined;

  // Check if there are workspace folders
  if (
    !vscode.workspace.workspaceFolders ||
    vscode.workspace.workspaceFolders.length === 0
  ) {
    vscode.window.showErrorMessage(
      'No workspace folders are open. Please open a workspace folder to use this extension',
    );
    return;
  }

  // Optionally, prompt the user to select a workspace folder if multiple are available
  if (vscode.workspace.workspaceFolders.length === 1) {
    resource = vscode.workspace.workspaceFolders[0];
  } else {
    const selectedFolder = await vscode.window.showWorkspaceFolderPick({
      placeHolder:
        'Select a workspace folder to use. This folder will be used to load workspace-specific configuration for the extension',
    });

    resource = selectedFolder;
  }

  // -----------------------------------------------------------------
  // Initialize the extension
  // -----------------------------------------------------------------

  // Get the configuration for the extension
  const config = new Config(
    vscode.workspace.getConfiguration(EXTENSION_ID, resource?.uri),
  );

  // Watch for changes in the configuration
  vscode.workspace.onDidChangeConfiguration((event) => {
    const workspaceConfig = vscode.workspace.getConfiguration(
      EXTENSION_ID,
      resource?.uri,
    );

    if (event.affectsConfiguration(`${EXTENSION_ID}.enable`, resource?.uri)) {
      const isEnabled = workspaceConfig.get<boolean>('enable');

      config.update(workspaceConfig);

      if (isEnabled) {
        vscode.window.showInformationMessage(
          `${EXTENSION_NAME} is now enabled and ready to use`,
        );
      } else {
        vscode.window.showInformationMessage(
          `${EXTENSION_NAME} is now disabled and will not be available`,
        );
      }
    }

    if (event.affectsConfiguration(EXTENSION_ID, resource?.uri)) {
      config.update(workspaceConfig);
    }
  });

  // -----------------------------------------------------------------
  // Get version of the extension
  // -----------------------------------------------------------------

  // Get the previous version of the extension
  const previousVersion = context.globalState.get('version');
  // Get the current version of the extension
  const currentVersion = context.extension.packageJSON.version;

  // Check if the extension is running for the first time
  if (!previousVersion) {
    vscode.window.showInformationMessage(
      `Welcome to ${EXTENSION_NAME} version ${currentVersion}! The extension is now active`,
    );

    // Update the version in the global state
    context.globalState.update('version', currentVersion);
  }

  // Check if the extension has been updated
  if (previousVersion && previousVersion !== currentVersion) {
    const actions: vscode.MessageItem[] = [
      {
        title: 'Release Notes',
      },
      {
        title: 'Close',
      },
    ];

    vscode.window
      .showInformationMessage(
        `New version of ${EXTENSION_NAME} is available. Check out the release notes for version ${currentVersion}`,
        ...actions,
      )
      .then((option) => {
        if (!option) {
          return;
        }

        // Handle the actions
        switch (option?.title) {
          case actions[0].title:
            vscode.env.openExternal(
              vscode.Uri.parse(
                `${EXTENSION_REPOSITORY_URL}/blob/main/CHANGELOG.md`,
              ),
            );
            break;

          default:
            break;
        }
      });

    // Update the version in the global state
    context.globalState.update('version', currentVersion);
  }

  // -----------------------------------------------------------------
  // Register FileController and commands
  // -----------------------------------------------------------------

  // Create a new FileController
  const fileController = new FileController(config);

  const disposableFileClass = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.class`,
    (args) => fileController.newClass(args),
  );
  const disposableFileComponent = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.component`,
    (args) => fileController.newComponent(args),
  );
  const disposableFileLayout = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.layout`,
    (args) => fileController.newLayout(args),
  );
  const disposableFileLoading = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.loading`,
    (args) => fileController.newLoading(args),
  );
  const disposableFilePage = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.page`,
    (args) => fileController.newPage(args),
  );
  const disposableFileNextAuth = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.nextauth`,
    (args) => fileController.newNextAuth(args),
  );
  const disposableFileTRPCRouter = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.trpc.router`,
    (args) => fileController.newTRPCRouter(args),
  );
  const disposableFileTRPCController = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.trpc.controller`,
    (args) => fileController.newTRPCController(args),
  );

  // -----------------------------------------------------------------
  // Register TerminalController and commands
  // -----------------------------------------------------------------

  // Create a new TerminalController
  const terminalController = new TerminalController(config);

  const disposableTerminalNewProject = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.project`,
    () => terminalController.newProject(),
  );
  const disposableTerminalStart = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.start`,
    () => terminalController.start(),
  );
  const disposableTerminalPrismaDbExecute = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.db.execute`,
    () => terminalController.prismaExecute(),
  );
  const disposableTerminalPrismaDbPull = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.db.pull`,
    () => terminalController.prismaPull(),
  );
  const disposableTerminalPrismaDbPush = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.db.push`,
    () => terminalController.prismaPush(),
  );
  const disposableTerminalPrismaDbSeed = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.db.seed`,
    () => terminalController.prismaSeed(),
  );
  const disposableTerminalPrismaFormat = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.format`,
    () => terminalController.prismaFormat(),
  );
  const disposableTerminalPrismaGenerate = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.generate`,
    () => terminalController.prismaGenerate(),
  );
  const disposableTerminalPrismaInit = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.init`,
    () => terminalController.prismaInit(),
  );
  const disposableTerminalPrismaMigrateDeploy = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.migrate.deploy`,
    () => terminalController.prismaMigrateDeploy(),
  );
  const disposableTerminalPrismaMigrateDev = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.migrate.dev`,
    () => terminalController.prismaMigrateDev(),
  );
  const disposableTerminalPrismaMigrateReset = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.migrate.reset`,
    () => terminalController.prismaMigrateReset(),
  );
  const disposableTerminalPrismaMigrateStatus = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.migrate.status`,
    () => terminalController.prismaMigrateStatus(),
  );
  const disposableTerminalPrismaStudio = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.studio`,
    () => terminalController.prismaStudio(),
  );
  const disposableTerminalPrismaValidate = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.prisma.validate`,
    () => terminalController.prismaValidate(),
  );
  const disposableTerminalDrizzleGenerate = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.drizzle.generate`,
    () => terminalController.drizzleGenerate(),
  );
  const disposableTerminalDrizzlePull = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.drizzle.pull`,
    () => terminalController.drizzlePull(),
  );
  const disposableTerminalDrizzlePush = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.drizzle.push`,
    () => terminalController.drizzlePush(),
  );
  const disposableTerminalDrizzleDrop = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.drizzle.drop`,
    () => terminalController.drizzleDrop(),
  );
  const disposableTerminalDrizzleUp = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.drizzle.up`,
    () => terminalController.drizzleUp(),
  );
  const disposableTerminalDrizzleCkeck = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.drizzle.check`,
    () => terminalController.drizzleCkeck(),
  );
  const disposableTerminalDrizzleStudio = vscode.commands.registerCommand(
    `${EXTENSION_ID}.terminal.drizzle.studio`,
    () => terminalController.drizzleStudio(),
  );

  // -----------------------------------------------------------------
  // Register TransformController and commands
  // -----------------------------------------------------------------

  // Create a new TransformController
  const transformController = new TransformController();

  const disposableEditorJson2Ts = vscode.commands.registerCommand(
    `${EXTENSION_ID}.editor.json.ts`,
    () => transformController.json2ts(),
  );
  const disposableEditorJson2Zod = vscode.commands.registerCommand(
    `${EXTENSION_ID}.editor.json.zod`,
    () => transformController.json2zod(),
  );

  // -----------------------------------------------------------------
  // Register ListFilesController
  // -----------------------------------------------------------------

  // Create a new ListFilesController
  const listFilesController = new ListFilesController(config);

  const disposableListOpenFile = vscode.commands.registerCommand(
    `${EXTENSION_ID}.list.openFile`,
    (uri) => listFilesController.openFile(uri),
  );

  const disposableListGotoLine = vscode.commands.registerCommand(
    `${EXTENSION_ID}.list.gotoLine`,
    (uri, line) => listFilesController.gotoLine(uri, line),
  );

  // -----------------------------------------------------------------
  // Register ListFilesProvider and list commands
  // -----------------------------------------------------------------

  // Create a new ListFilesProvider
  const listFilesProvider = new ListFilesProvider(listFilesController);

  // Register the list provider
  const disposableListFilesTreeView = vscode.window.createTreeView(
    `${EXTENSION_ID}.listFilesView`,
    {
      treeDataProvider: listFilesProvider,
      showCollapseAll: true,
    },
  );

  const disposableRefreshListFiles = vscode.commands.registerCommand(
    `${EXTENSION_ID}.listFiles.refresh`,
    () => listFilesProvider.refresh(),
  );

  // -----------------------------------------------------------------
  // Register ListRoutesProvider and list commands
  // -----------------------------------------------------------------

  // Create a new ListRoutesProvider
  const listRoutesProvider = new ListRoutesProvider();

  // Register the list provider
  const disposableListRoutesTreeView = vscode.window.createTreeView(
    `${EXTENSION_ID}.listRoutesView`,
    {
      treeDataProvider: listRoutesProvider,
      showCollapseAll: true,
    },
  );

  const disposableRefreshListRoutes = vscode.commands.registerCommand(
    `${EXTENSION_ID}.listRoutes.refresh`,
    () => listRoutesProvider.refresh(),
  );

  // -----------------------------------------------------------------
  // Register ListComponentsProvider and list commands
  // -----------------------------------------------------------------

  // Create a new ListComponentsProvider
  const listComponentsProvider = new ListComponentsProvider();

  // Register the list provider
  const disposableListComponentsTreeView = vscode.window.createTreeView(
    `${EXTENSION_ID}.listComponentsView`,
    {
      treeDataProvider: listComponentsProvider,
      showCollapseAll: true,
    },
  );

  const disposableRefreshListComponents = vscode.commands.registerCommand(
    `${EXTENSION_ID}.listComponents.refresh`,
    () => listComponentsProvider.refresh(),
  );

  // -----------------------------------------------------------------
  // Register ListHooksProvider and list commands
  // -----------------------------------------------------------------

  // Create a new ListHooksProvider
  const listHooksProvider = new ListHooksProvider();

  // Register the list provider
  const disposableListHooksTreeView = vscode.window.createTreeView(
    `${EXTENSION_ID}.listHooksView`,
    {
      treeDataProvider: listHooksProvider,
      showCollapseAll: true,
    },
  );

  const disposableRefreshListHooks = vscode.commands.registerCommand(
    `${EXTENSION_ID}.listHooks.refresh`,
    () => listHooksProvider.refresh(),
  );

  // -----------------------------------------------------------------
  // Register ListFilesProvider and ListMethodsProvider events
  // -----------------------------------------------------------------

  vscode.workspace.onDidCreateFiles(() => {
    listFilesProvider.refresh();
    listRoutesProvider.refresh();
    listComponentsProvider.refresh();
    listHooksProvider.refresh();
  });
  vscode.workspace.onDidSaveTextDocument(() => {
    listFilesProvider.refresh();
    listRoutesProvider.refresh();
    listComponentsProvider.refresh();
    listHooksProvider.refresh();
  });

  // -----------------------------------------------------------------
  // Register FeedbackProvider and Feedback commands
  // -----------------------------------------------------------------

  // Create a new FeedbackProvider
  const feedbackProvider = new FeedbackProvider(new FeedbackController());

  // Register the feedback provider
  const disposableFeedbackTreeView = vscode.window.createTreeView(
    `${EXTENSION_ID}.feedbackView`,
    {
      treeDataProvider: feedbackProvider,
    },
  );

  // Register the commands
  const disposableFeedbackAboutUs = vscode.commands.registerCommand(
    `${EXTENSION_ID}.feedback.aboutUs`,
    () => feedbackProvider.controller.aboutUs(),
  );
  const disposableFeedbackReportIssues = vscode.commands.registerCommand(
    `${EXTENSION_ID}.feedback.reportIssues`,
    () => feedbackProvider.controller.reportIssues(),
  );
  const disposableFeedbackRateUs = vscode.commands.registerCommand(
    `${EXTENSION_ID}.feedback.rateUs`,
    () => feedbackProvider.controller.rateUs(),
  );
  const disposableFeedbackSupportUs = vscode.commands.registerCommand(
    `${EXTENSION_ID}.feedback.supportUs`,
    () => feedbackProvider.controller.supportUs(),
  );

  context.subscriptions.push(
    disposableFileClass,
    disposableFileComponent,
    disposableFileLayout,
    disposableFileLoading,
    disposableFilePage,
    disposableFileNextAuth,
    disposableFileTRPCRouter,
    disposableFileTRPCController,
    disposableTerminalNewProject,
    disposableTerminalStart,
    disposableTerminalPrismaDbExecute,
    disposableTerminalPrismaDbPull,
    disposableTerminalPrismaDbPush,
    disposableTerminalPrismaDbSeed,
    disposableTerminalPrismaFormat,
    disposableTerminalPrismaGenerate,
    disposableTerminalPrismaInit,
    disposableTerminalPrismaMigrateDeploy,
    disposableTerminalPrismaMigrateDev,
    disposableTerminalPrismaMigrateReset,
    disposableTerminalPrismaMigrateStatus,
    disposableTerminalPrismaStudio,
    disposableTerminalPrismaValidate,
    disposableTerminalDrizzleGenerate,
    disposableTerminalDrizzlePull,
    disposableTerminalDrizzlePush,
    disposableTerminalDrizzleDrop,
    disposableTerminalDrizzleUp,
    disposableTerminalDrizzleCkeck,
    disposableTerminalDrizzleStudio,
    disposableEditorJson2Ts,
    disposableEditorJson2Zod,
    disposableListOpenFile,
    disposableListGotoLine,
    disposableListFilesTreeView,
    disposableRefreshListFiles,
    disposableListRoutesTreeView,
    disposableRefreshListRoutes,
    disposableListComponentsTreeView,
    disposableRefreshListComponents,
    disposableListHooksTreeView,
    disposableRefreshListHooks,
    disposableFeedbackTreeView,
    disposableFeedbackAboutUs,
    disposableFeedbackReportIssues,
    disposableFeedbackRateUs,
    disposableFeedbackSupportUs,
  );
}

export function deactivate() {}
