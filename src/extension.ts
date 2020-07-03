/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('extension.helloWebpack', () => {
    vscode.window.showInformationMessage(`41 + 1 }`);
  });

  context.subscriptions.push(disposable);
}
