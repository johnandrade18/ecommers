import express from "express";
const router = express.Router();
import  {registrar_cliente} from '../controllers/ClientesController.js'; 

router.post("/registrar_cliente", registrar_cliente);



export default router;