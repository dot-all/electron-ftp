const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const ftp = require('basic-ftp');

let win;

function createWindow() {
const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    preload: path.join(__dirname, 'preload.js'), // Asegúrate de que esta ruta sea correcta
    nodeIntegration: false, // Esto debe ser false si usas contextIsolation
    contextIsolation: true, // Debe ser true para seguridad
  },
});


  win.loadURL('http://localhost:3000'); // URL de Vite
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Función de conexión FTPS
async function connectToFtp() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host: "ftp.dlptest.com", // Servidor FTP de prueba
      user: "dlpuser",
      password: "rNrKYTX9g7z3RgJRmxWuGHbeu",
      secure: true, // FTPS
    });
    return "Connected successfully";
  } catch (err) {
    return `Failed to connect: ${err.message}`;
  } finally {
    client.close();
  }
}

// Manejar el evento cuando el frontend solicita la conexión FTP
ipcMain.handle('connect-ftp', async () => {
  const status = await connectToFtp();
  return status;
});
