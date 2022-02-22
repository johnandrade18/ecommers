import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

// Importar coneccion a la base de datos
import db from "./config/db.js";

// importar rutas
import clientesRoute from "./routes/Clientes.routes.js";
import adminRoute from "./routes/Admin.routes.js";

// Importar modelos
import clientesModel from "./models/Clientes.js";
import adminModel from "./models/Admin.js";


// variable de puerto
const port = process.env.PORT || 5000;

// configuraciones
dotenv.config({
    path: ".env"
});

// instancia de express
const app = express();

//Conexion a la base de datos
clientesModel.sync();
adminModel.sync();
db.authenticate()
    .then(() => console.log("DB conectada"))
    .catch((err) => console.log("Error al conectar a la DB: ", err));

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// rutas
app.use("/api", clientesRoute);
app.use("/api", adminRoute);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

export default app;