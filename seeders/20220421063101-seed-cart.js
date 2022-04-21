'use strict';

const fs = require("fs")

module.exports = {
  up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const cart = JSON.parse(fs.readFileSync("./data/cart.json"))
    cart.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    });
    return queryInterface.bulkInsert("Carts", cart, {})
  },

  down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Carts", cart, {})
  }
};
