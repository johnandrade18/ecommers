import express from "express";
const router = express.Router();
import  {registrar_admin} from '../controllers/AdminController.js'; 

router.post("/registrar_admin", registrar_admin);



export default router;