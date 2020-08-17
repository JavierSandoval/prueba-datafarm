const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const vereda = sequelize.define('veredas', {
    id_vereda: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_vereda: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = vereda;