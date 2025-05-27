import { app } from "./app.js";
import { testConnection } from "./config/database.js";

const PORT = 3000;

const startServer = async () => {
  try {
    await testConnection();
    app.listen(PORT, () => {
      console.log(`Servidor tá ON em http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Falha ao iniciar o servidor!', err)
    process.exit(1);
  }
};

startServer();
