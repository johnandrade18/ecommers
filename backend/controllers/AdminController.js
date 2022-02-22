import Admin from "../models/Admin.js";
import bcrypt from "bcrypt-nodejs";

const registrar_admin = async (req, res) => {
    const {
        nombres,
        apellidos,
        email,
        password
    } = req.body;
    const admin_array = await Admin.findOne({
        where: {
            email: email
        }
    });
    console.log(admin_array);
    if (admin_array == null) {
        if (password) {
            bcrypt.hash(password, null, null, async (err, hash) => {
                if(hash){
                    const password = hash;
                    const registro = await Admin.create({
                        nombres,
                        apellidos,
                        email,
                        password
                    });
                    res.status(200).send({
                        registro
                    });
                }else{
                    res.status(500).send({
                        message: "Error al encriptar la contraseña"
                    });
                }
            });
        }else{
            res.status(200).json({
                ok: false,
                mensaje: "El password es obligatorio"
            });
        }
    } else {
        res.json({
            message: "El email ya existe"
        });
    }
};

export {
    registrar_admin
};