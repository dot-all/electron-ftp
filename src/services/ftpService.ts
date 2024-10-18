import { Client } from 'basic-ftp';

export const connectToFtp = async () => {
    const client = new Client();
    client.ftp.verbose = true; // Activar logs para depuración

    try {
        await client.access({
            host: "test.rebex.net", // Cambia esto por tu servidor FTP
            user: "demo",
            password: "password",
            secure: true,
            secureOptions: {
                rejectUnauthorized: false, // Ignora la validación del certificado
            },
        });
        console.log("Conectado exitosamente");
    } catch (err) {
        console.error("Error de conexión:", err);
    } finally {
        client.close();
    }
};