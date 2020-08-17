const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const trabajador = sequelize.define('trabajadores', {
    id_trabajador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_trabajador: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellido_trabajador: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefono_trabajador: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    salario: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = trabajador;