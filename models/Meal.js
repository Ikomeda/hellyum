const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const Meal_Ingredient = require('./Meal_Ingredient.js');

class Meal extends Model {}

Meal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    meal_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
      allowNull: true,
    },
    instructions: {
      type: DataTypes.TEXT,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'meal',
  }
);

module.exports = Meal;
