// mysqlconfig.js
const Sequelize = require('sequelize');
const _ = require('lodash');
const redis = require('redis');

const setCache = function (data) {
    if (_.isEmpty(data) || !data.id) return;

    const dbName = data.dataValues.sequelize.config.database;
    const tableName = data.dataValues.tableName;
    const redisKey = [dbName, tableName, JSON.stringify(data.id)].join(':')
    redis.setex(redisKey, 3600, JSON.stringify(data.toJSON()));
};

const sequelize = new Sequelize('demo', 'user', '9932xt', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    hooks: {
        afterUpdate(data) {
            setCache(data);
        },
        afterCreate(data) {
            setCache(data);
        },
    },
});

sequelize
    .authenticate()
    .then(function () {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;