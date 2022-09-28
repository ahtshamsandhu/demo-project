'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('studentcourses','studentid',{
      type: Sequelize.INTEGER,
      references: {
        model: 'students',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
    await queryInterface.addColumn('studentcourses','courseid',{
      type: Sequelize.INTEGER,
      references: {
        model: 'courses',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('studentcourses','studentid');
    await queryInterface.removeColumn('studentcourses','courseid');
  }
};