'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    static associate(models) {
     //student.hasMany(models.studentcourse, {foreignKey: 'studentid'})
     //student.belongsTo(models.studentcourse)
     student.hasMany(models.studentcourse, {foreignKey:'studentid',constraints:false})
    }
  }
  student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};