
const { Sequelize, Op, Model, DataTypes } = require('sequelize');


const sequelize = new Sequelize('fincas_db', 'root', null, {
  // parameters {'database', 'username', 'password'}
  host: '127.0.0.1',
  dialect: 'mysql'
});

/*const sequelize = new Sequelize('fincas_db', 'user_df', 'pass_df', {
  host: '127.0.0.1',
  dialect: 'mysql'
});*/

/*sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.log('Unable to connect to the database')
  })*/

module.exports = sequelize;