'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Artists', [
      { title: 'Kanye West', image: 'https://www.rap-up.com/app/uploads/2012/10/kanye-shades.jpg' },
      { title: 'System of a Down', image: 'https://www.rollingstone.com/wp-content/uploads/2020/11/SOAD-9966_hi.jpg' },
      { title: 'Drake', image: 'https://wallpaperaccess.com/full/568442.jpg' },
      { title: 'Ariana Grande', image: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/12/09/942248-ariana-grande.jpg' },
      { title: 'T-Pain', image: 'https://s1.ticketm.net/dam/a/a6a/4735ca93-594f-44a4-b9a3-39e16e80ca6a_915431_TABLET_LANDSCAPE_LARGE_16_9.jpg' },
      { title: 'Metallica', image: 'https://static.billboard.com/files/2020/05/03-metallica-press-2018-cr-Ross-Halfin-b-billboard-1548-1589834861-compressed.jpg' },
      { title: 'Mariah Carey', image: 'https://variety.com/wp-content/uploads/2020/02/photo-credit-dennis-leupold-e1581513272604.jpg?w=681&h=383&crop=1' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Artists', null, {});
  }
};
