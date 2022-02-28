import Clientes from "../models/Clientes.js";
import bcrypt from "bcrypt-nodejs";
import createToken from "../helpers/jwt.js";

// Registrar cliente
const registrar_cliente = async (req, res) => {
    const {
        nombres,
        apellidos,
        email,
        password
    } = req.body;
    const clientes_array = await Clientes.findOne({
        where: {
            email: email,
        },
    });
    console.log(clientes_array);
    if (clientes_array == null) {
        if (password) {
            bcrypt.hash(password, null, null, async (err, hash) => {
                if (hash) {
                    const password = hash;
                    const registro = await Clientes.create({
                        nombres,
                        apellidos,
                        email,
                        password,
                    });
                    res.status(200).send({
                        registro,
                    });
                } else {
                    res.status(500).send({
                        message: "Error al encriptar la contraseña",
                    });
                }
            });
        } else {
            res.status(200).json({
                ok: false,
                mensaje: "El password es obligatorio",
            });
        }
    } else {
        res.json({
            message: "El email ya existe",
        });
    }
};

// Login cliente
const login_cliente = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    const clientes_array = await Clientes.findOne({
        where: {
            email,
        },
    });
    if (clientes_array != null) {
        let data = clientes_array.dataValues;
        bcrypt.compare(password, clientes_array.password, (err, check) => {
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
    registrar_cliente,
    login_cliente
};