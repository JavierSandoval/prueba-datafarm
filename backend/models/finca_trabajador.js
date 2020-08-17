const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const finca_trabajador = sequelize.define('finca_trabajadores', {
    id_finca: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    id_trabajador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    }
},{
    timestamps: false
});

finca_trabajador.associate = function(models) {
    //associations can be defined here
    finca.belongsTo(models.finca,
        {
            as: 'finca',
            foreignKey: 'id_finca',
        }
    );
    finca.belongsTo(models.trabajador,
        {
            as: 'trabajador',
            foreignKey: 'id_trabajador',
        }
    );
};

module.exports = finca_trabajador;