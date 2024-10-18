// src/@types/electron.d.ts
declare global {
  interface Window {
    electron: {
      connectFtp: () => Promise<string>;
    };
  }
}

export {}; // Necesario para que TypeScript trate este archivo como un módulo
