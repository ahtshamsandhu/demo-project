'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('studentcourse', {id:Sequelize.INTEGER});
    await queryInterface.addColumn('studentcourse','studentid',{
      type: Sequelize.INTEGER,
      references: {
        model: 'students',
        key: 'id'
      }
    });
    await queryInterface.addColumn('studentcourse','courseid',{
      type: Sequelize.INTEGER,
      references: {
        model: 'courses',
        key: 'id'
      }
    })
    await queryInterface.addColumn('courses','teacherid',{
      type:Sequelize.INTEGER,
      references : {
        model: 'teachers',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('courses','teacherid');
    await queryInterface,dropTable('studentcourse');
  }
};
