const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meal_Date extends Model {}

Meal_Date.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    meal_id: {
      type: DataTypes.INTEGER,
      reverences: {
        model: 'meal',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'meal_date',
  }
);

module.exports = Meal_Date;
