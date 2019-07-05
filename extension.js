// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let rename = vscode.commands.registerCommand('extension.rename', function () {
		vscode.commands.executeCommand('editor.action.rename')
	});
	let refactor = vscode.commands.registerCommand('extension.refactor', function () {
		vscode.commands.executeCommand('editor.action.refactor')
	});
	let focusTerminal = vscode.commands.registerCommand('extension.focusTerminal', function () {
		vscode.commands.executeCommand('workbench.action.terminal.focus')
	});
	let test = vscode.commands.registerCommand('extension.test', function () {
		vscode.commands.executeCommand('npm-script.test')
	});
	let install = vscode.commands.registerCommand('extension.install', function () {
		vscode.commands.executeCommand('npm-script.install')
	});
	let editor = vscode.commands.registerCommand('extension.editor', function () {
		vscode.commands.executeCommand('workbench.action.focusFirstEditorGroup')
	});

	context.subscriptions.push(rename, focusTerminal, refactor, test, install, editor);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
