'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsToMany(models.User, { through: "Carts" })
    }
  }
  Item.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: {
      type: DataTypes.INTEGER,
      get() {
        const value = this.getDataValue('price')
        return value ? new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'IDR' }).format(value) : null
      }
    },
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};