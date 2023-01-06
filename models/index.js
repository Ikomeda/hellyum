const User = require('./User');
const Meal = require('./Meal');
const Meal_Date = require('./Meal_Date');
const Meal_Ingredient = require('./Meal_Ingredient');
const Ingredients = require('./Ingredients');

// Users belongToMany Meals (through Meal_Date)
User.belongsToMany(Meal, {
  through: Meal_Date,
  as: 'meal_date_meal',
  foreignKey: 'user_id',
  onDelete: 'cascade',
});

// Meals belongToMany Users (through Meal_Date)
Meal.belongsToMany(User, {
  through: Meal_Date,
  as: 'meal_date_user',
  foreignKey: 'meal_id',
  onDelete: 'cascade',
});

// Ingredients belong to Many Meals (through Meal_Ingredients)
Ingredients.belongsToMany(Meal, {
  through: { model: Meal_Ingredient },
  // as: 'meal_ingredient_meal',
  // foreignKey: 'ingredient_id',
  // onDelete: 'cascade',
});

// Meal belong to Many Ingredients (through Meal_Ingredients)
Meal.belongsToMany(Ingredients, {
  through: { model: Meal_Ingredient },
  // as: 'meal_ingredient_ingredient',
  // foreignKey: 'meal_id',
  // onDelete: 'cascade',
});

module.exports = {
  User,
  Meal,
  Meal_Date,
  Meal_Ingredient,
  Ingredients,
};
