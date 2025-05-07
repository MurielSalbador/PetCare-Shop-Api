const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('PetCare_Shop', 'root', 'M46446532S', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;