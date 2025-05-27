import mysql from "mysql2/promise.js";
import dotenv from "dotenv";

dotenv.config();

const pool =  mysql.createPool({
  host: "localhost",
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Conexão com o banco estabelecida!");
    connection.release();
  } catch (err) {
    console.log("Erro ao conectar com o banco!", err);
    process.exit(1);
  }
};

export { pool, testConnection };
