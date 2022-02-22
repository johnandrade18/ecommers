import Sequelize from "sequelize";
import sequelize from "../config/db.js";

const Admin = sequelize.define("admin", {
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
        required: false,
    },
    rol: {
        type: Sequelize.STRING,
        required: false,
    },
    numero_document: {
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

export default Admin;