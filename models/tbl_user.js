module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      field: 'name',
      type: DataTypes.STRING(255),
      defaultValue: '',
      allowNull: false
    },
    age: {
      field: 'age',
      type: DataTypes.INTEGER,
      defaultValue: 18,
      allowNull: false
    }
  },{
    tableName:'tbl_user'
  });
  return User;
};