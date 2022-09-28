'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    static associate(models) {
      //course.belongsToMany(models.teacher, {through: 'teachercourse'});
      //course.belongsToMany(models.student, {through: 'studentcourse'});
     //course.hasMany(models.studentcourse, {foreignKey: 'courseid'})
     //course.belongsTo(models.studentcourse);
     course.hasMany(models.studentcourse, {foreignKey:'courseid',constraints:false});
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