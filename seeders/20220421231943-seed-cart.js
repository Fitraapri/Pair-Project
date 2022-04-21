'use strict';

const fs = require('fs')

module.exports = {
  up (queryInterface, Sequelize) {
    const item = JSON.parse(fs.readFileSync("./data/cart.json"))
    item.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    });
    return queryInterface.bulkInsert("Carts", item, {})
  },
  
  down (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert("Carts", null, {})
  }
};
