const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  connectFtp: () => ipcRenderer.invoke('connect-ftp'),
});
