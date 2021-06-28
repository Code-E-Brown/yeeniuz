'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Tags', [
      { title: 'rap' },
      { title: 'pop' },
      { title: 'rock' },
      { title: 'r&b' },
      { title: 'country' },
      { title: 'gospel' },
      { title: 'other' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
