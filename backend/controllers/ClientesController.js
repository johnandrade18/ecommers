import Clientes from "../models/Clientes.js";
import bcrypt from "bcrypt-nodejs";

const registrar_cliente = async (req, res) => {
    const {
        nombres,
        apellidos,
        email,
        password
    } = req.body;
    const clientes_array = await Clientes.findOne({
        where: {
            email: email
        }
    });
    console.log(clientes_array);
    if (clientes_array == null) {
        if (password) {
            bcrypt.hash(password, null, null, async (err, hash) => {
                if(hash){
                    const password = hash;
                    const registro = await Clientes.create({
                        nombres,
                        apellidos,
                        email,
                        password
                    });
                    res.status(200).send({
                        nombres,
                        apellidos,
                        email,
                        password,
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
    registrar_cliente
};