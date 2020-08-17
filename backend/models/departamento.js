const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const departamento = sequelize.define('departamentos', {
    id_departamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_departamento: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = departamento;