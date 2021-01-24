module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('Deliverymen', 'avatarId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Files',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }),

  down: (queryInterface) =>
    queryInterface.removeColumn('Deliverymen', 'avatarId'),
};
