const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const parentezco = sequelize.define('parentezcos', {
    id_parentezco: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    tipo_parentezco: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = parentezco;