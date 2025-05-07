import express from "express";
import { PORT } from "./config.js";
import { sequelize } from "./src/config/database.js";
import authRoutes from "./src/routes/auth.js"; // Usa import en lugar de require

import "./src/models/User.js"; // Asegura que el modelo se registre

const app = express();

app.use(express.json());

// CORS básico
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// Rutas de autenticación
app.use("/api/auth", authRoutes);

// Inicialización del servidor y la DB
const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Ocurrió un error en la inicialización:", error);
  }
};

startServer();