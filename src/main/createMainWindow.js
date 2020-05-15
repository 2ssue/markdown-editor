import { BrowserWindow } from 'electron';

const path = require('path');
const url = require('url');

class MainWindow {
  constructor() {
    this.window = new BrowserWindow({ width: 800, height: 600 });
    this.window.loadURL(
      url.format({
        pathname: path.join(__dirname, '/../../index.html'),
        protocol: 'file',
        slashes: true,
      }),
    );
    this.window.on('closed', () => {
      this.window = null;
    });
  }
}

function createdMainWindow() {
  return new MainWindow();
}

export default createdMainWindow;
