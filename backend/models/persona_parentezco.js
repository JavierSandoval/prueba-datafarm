const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const persona_parentezco = sequelize.define('persona_parentezco', {
    id_persona1: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    id_persona2: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    id_parentezco: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false
});

persona_parentezco.associate = function(models) {
    //associations can be defined here
    finca.belongsTo(models.persona,
        {
            as: 'persona',
            foreignKey: 'id_persona',
        }
    );
    finca.belongsTo(models.persona,
        {
            as: 'persona',
            foreignKey: 'id_persona',
        }
    );
    finca.belongsTo(models.parentezco,
        {
            as: 'parentezco',
            foreignKey: 'id_parentezco',
        }
    );
};

module.exports = persona_parentezco;