import Sequelize from "sequelize";
import sequelize from "../config/db.js";

const Admins = sequelize.define("admins", {
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
    email: {
        type: Sequelize.STRING,
        required: true,
    },
    password: {
        type: Sequelize.STRING,
        required: true,
    },
    telefono: {
        type: Sequelize.STRING,
        required: true,
    },
    rol: {
        type: Sequelize.STRING,
        required: true,
    },
    numero_documento: {
        type: Sequelize.STRING,
        required: true,
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

export default Admins;