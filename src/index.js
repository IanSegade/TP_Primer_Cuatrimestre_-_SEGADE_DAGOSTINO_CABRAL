import express from "express";
import cors from "cors";
import pkg from "pg";
import client from "./configs/db-config.js";
const { Client } = pkg;
const app = express();
const port = 9000;

client.connect();

app.use(cors());
app.use(express.json());

app.get("/api/ObtenerPublicaciones", async (req, res) => {
  const response = await client.query('SELECT * from event');
  res.send(response.rows);
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en  http://localhost:${PORT}`);
});
