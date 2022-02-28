import express from "express";
const router = express.Router();
import  {registrar_admin, login_admin} from '../controllers/AdminsController.js'; 

//Registrar admin
router.post("/registrar_admin", registrar_admin);
//Login admin
router.post("/login_admin", login_admin);



export default router;