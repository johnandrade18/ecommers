import Admins from "../models/Admins.js";
import bcrypt from "bcrypt-nodejs";
import createToken from "../helpers/jwt.js";

//Registrar admin
const registrar_admin = async (req, res) => {
    const {
        nombres,
        apellidos,
        email,
        password,
        telefono,
        rol,
        numero_documento
    } = req.body;
    const admin_array = await Admins.findOne({
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
                    const registro = await Admins.create({
                        nombres,
                        apellidos,
                        email,
                        password,
                        telefono,
                        rol,
                        numero_documento
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

//Login admin
const login_admin = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    const admins_array = await Admins.findOne({
        where: {
            email,
        },
    });
    if (admins_array != null) {
        let data = admins_array.dataValues;
        bcrypt.compare(password, admins_array.password, (err, check) => {
            if (check) {
                res.status(200).send({
                    data,
                    token: createToken(data)
                });
            } else {
                res.status(200).send({
                    message: "La contraseña es incorrectos",
                });
            }
        });
    } else {
        res.status(200).send({
            message: "El email no se encuentra registrado",
        });
    }
};

export {
    registrar_admin,
    login_admin
};