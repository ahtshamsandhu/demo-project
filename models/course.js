'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    static associate(models) {
      course.hasMany(models.teacher);
      course.belongsToMany(models.student, {through: 'studentcourse'});
    }
  }
  course.init({
    name: DataTypes.STRING,
    credits: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};