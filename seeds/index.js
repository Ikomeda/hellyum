const seedMeal = require('./meal-seeds');
const seedIngredients = require('./ingredient-seeds');
const seedMealIngredients = require('./meal_ingredient-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedMeal();
  console.log('\n----- MEALS SEEDED -----\n');
  await seedIngredients();
  console.log('\n----- INGREDIENTS SEEDED -----\n');
  await seedMealIngredients();
  console.log('\n----- MEAL INGREDIENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
