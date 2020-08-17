const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const municipio = sequelize.define('municipios', {
    id_municipio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_municipio: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = municipio;