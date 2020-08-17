const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const finca_persona = sequelize.define('finca_persona', {
    id_finca: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    id_persona: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    }
},{
    timestamps: false
});

finca_persona.associate = function(models) {
    //associations can be defined here
    finca.belongsTo(models.finca,
        {
            as: 'finca',
            foreignKey: 'id_finca',
        }
    );
    finca.belongsTo(models.persona,
        {
            as: 'persona',
            foreignKey: 'id_persona',
        }
    );
};

module.exports = finca_persona;