'use strict';
const fs = require('fs')

module.exports = {
  up (queryInterface, Sequelize) {
      const profil = JSON.parse(fs.readFileSync("./data/profile.json"))
      profil.forEach(el => {
        el.createdAt = new Date()
        el.updatedAt = new Date()
      });
      return queryInterface.bulkInsert("Profiles", profil, {})
    },
    
    down (queryInterface, Sequelize) {
      
      return queryInterface.bulkDelete("Profiles", null, {})
  }
};
