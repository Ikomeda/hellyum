const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meal_Ingredient extends Model {}

Meal_Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    meal_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'meal',
        key: 'id',
      },
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ingredients',
        key: 'id',
      },
    },
    measurement: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'meal_ingredient',
  }
);

module.exports = Meal_Ingredient;
