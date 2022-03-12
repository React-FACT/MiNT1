const { BaseEntity } = require("./bases/base.entity");
const { Sequelize } = require("sequelize");

class Authentication extends BaseEntity {
  username = { type: Sequelize.STRING(50) };
  password = { type: Sequelize.STRING(50) };
  email = { type: Sequelize.STRING(100) };
  address = { type: Sequelize.STRING(50) };
  roleId = {
    type: Sequelize.INTEGER,
    references: 'role',
    referencesKey: 'id'
  };
}
module.exports = { Authentication };
