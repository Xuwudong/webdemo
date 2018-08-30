// mysqlUser.js
const Sequelize = require('sequelize');
const base = require('./mysqlBase.js');
const sequelize = require('./mysqlconfig.js');

const Base = new base(sequelize);
module.exports = Base.define('user', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
}, {
    tableName: 'user',
    timestamps: true,
});