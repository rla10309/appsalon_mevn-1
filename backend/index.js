import express from "express"
import { db } from "./config/db.js";
import servicesRoutes from "./routes/servicesRoutes.js"

// Configurar la aplicación
const app = express();

// Conectar a base de datos
db();

// Definir una ruta
app.use("/api/services", servicesRoutes)

// Definir puerto
const PORT = process.env.PORT || 4000;

// Arrancar la app
app.listen(PORT, () => {
  console.log("El servidor se está ejecutando en el puerto: ", PORT);
});
