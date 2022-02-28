import express from "express";
const router = express.Router();
// constantes de los controladores
import  {registrar_cliente, login_cliente} from '../controllers/ClientesController.js'; 

// Registrar cliente
router.post("/registrar_cliente", registrar_cliente);
// Login cliente
router.post("/login_cliente", login_cliente);



export default router;