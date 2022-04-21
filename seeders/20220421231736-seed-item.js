'use strict';

const fs = require('fs')

module.exports = {
  up (queryInterface, Sequelize) {
    const item = JSON.parse(fs.readFileSync("./data/item.json"))
    item.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    });
    return queryInterface.bulkInsert("Items", item, {})
  },
  
  down (queryInterface, Sequelize) {
   
    return queryInterface.bulkInsert("Items", null, {})
  }
};
