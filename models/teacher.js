'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teacher extends Model {
  }
  teacher.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'teacher',
  });
  return teacher;
};

      // studentcourse.belongsTo(models.student, {foreignKey:'studentid',constraints:false});
      // studentcourse.belongsTo(models.course, {foreignKey:'courseid',constraints:false});