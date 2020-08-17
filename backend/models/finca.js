const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const finca = sequelize.define('fincas', {
    id_finca: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_finca: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    id_propietario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_vereda: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_municipio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false
});

finca.associate = function(models) {
    //associations can be defined here
    finca.belongsTo(models.persona,
        {
            as: 'persona',
            foreignKey: 'id_persona',
        }
    );
    finca.belongsTo(models.vereda,
        {
            as: 'vereda',
            foreignKey: 'id_vereda',
        }
    );
    finca.belongsTo(models.municipio,
        {
            as: 'municipio',
            foreignKey: 'id_municipio',
        }
    );
    finca.belongsTo(models.departamento,
        {
            as: 'departamento',
            foreignKey: 'id_departamento',
        }
    );
};

module.exports = finca;