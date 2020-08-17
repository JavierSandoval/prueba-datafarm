const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const persona = sequelize.define('personas', {
    id_persona: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_persona: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellido_persona: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefono_persona: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = persona;