import mysql from "mysql2/promise";

async function connectDataBase() {
  return await mysql.createConnection({
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
    port: Number(process.env.DB_PORT),
  });
}

export const connection = connectDataBase();
