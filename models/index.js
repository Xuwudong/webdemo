const Sequelize = require('sequelize');
const mysql = require('mysql');
const path = require('path');
const fs = require('fs');

const db = {};
const sequelize = new Sequelize('demo','root','123456',{
  host:'127.0.0.1',
  port:3306,
  dialect:'mysql',
  define:{
    freezeTableName: true,
    timestamp: false
  }
});

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== -1) && (file !== 'index.js');
  })
  .forEach(file =>{
    let model= sequelize.import(path.join(__dirname,file));
    db[model.name] = model;
  });


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;