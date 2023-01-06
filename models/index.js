const User = require('./User');
const Meal = require('./Meal');
const Meal_Ingredient = require('./Meal_Ingredient');
const Ingredients = require('./Ingredients');



// Ingredients belong to Many Meals (through Meal_Ingredients)
Ingredients.belongsToMany(Meal, {
  through: Meal_Ingredient,
  foreignKey: 'ingredient_id',
  onDelete: 'cascade',
});

// Meal belong to Many Ingredients (through Meal_Ingredients)
Meal.belongsToMany(Ingredients, {
  through: Meal_Ingredient,
  foreignKey: 'meal_id',
  onDelete: 'cascade',
});

module.exports = {
  User,
  Meal,
  Meal_Ingredient,
  Ingredients,
};
