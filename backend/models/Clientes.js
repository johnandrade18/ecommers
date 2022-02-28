import Sequelize from "sequelize";
import sequelize from "../config/db.js";

const Clientes = sequelize.define("clientes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombres: {
        type: Sequelize.STRING,
        required: true,
    },
    apellidos: {
        type: Sequelize.STRING,
        required: true,
    },
    pais: {
        type: Sequelize.STRING,
        required: false,
    },
    email: {
        type: Sequelize.STRING,
        required: true,
    },
    password: {
        type: Sequelize.STRING,
        required: true,
    },
    perfil: {
        type: Sequelize.STRING,
        defaultValue: "perfil.png",
        required: true,
    },
    telefono: {
        type: Sequelize.STRING,
        required: false,
    },
    genero: {
        type: Sequelize.STRING,
        required: false,
    },
    fecha_nacimiento: {
        type: Sequelize.STRING,
        required: false,
    },
    numero_documento: {
        type: Sequelize.STRING,
        required: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
});

export default Clientes;