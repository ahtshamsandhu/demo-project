'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentcourse extends Model {
    static associate(models) {
      // define association here
        studentcourse.belongsTo(models.student, {foreignKey:'studentid',constraints:false});
        studentcourse.belongsTo(models.course, {foreignKey:'courseid',constraints:false});
    }
  }
  studentcourse.init({
    // studentid: DataTypes.STRING,
    // courseid: DataTypes.STRING,
    teacherName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'studentcourse',
  });
  return studentcourse;
};