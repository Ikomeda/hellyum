const { Meal_Ingredient } = require('../models');

const mealIngredientData = [
  {
    meal_id: 1,
    ingredient_id: 1,
    measurement: '2 pounds shredded',
  },
  {
    meal_id: 1,
    ingredient_id: 2,
    measurement: '1/2 cup',
  },
  {
    meal_id: 1,
    ingredient_id: 3,
    measurement: '1 15 ounce can',
  },
  {
    meal_id: 1,
    ingredient_id: 4,
    measurement: '1 15 ounce can',
  },
  {
    meal_id: 1,
    ingredient_id: 5,
    measurement: '1 diced',
  },
  {
    meal_id: 1,
    ingredient_id: 6,
    measurement: '1/2 cup',
  },
  {
    meal_id: 1,
    ingredient_id: 7,
    measurement: '2 cloves',
  },
  {
    meal_id: 1,
    ingredient_id: 8,
    measurement: '1/4 cup',
  },
  {
    meal_id: 1,
    ingredient_id: 9,
    measurement: '1/4 cup',
  },
  {
    meal_id: 1,
    ingredient_id: 10,
    measurement: '1/4 cup',
  },
  {
    meal_id: 1,
    ingredient_id: 11,
    measurement: '2 tbsp',
  },
  {
    meal_id: 1,
    ingredient_id: 12,
    measurement: '2 cups shredded',
  },
  {
    meal_id: 1,
    ingredient_id: 13,
    measurement: '8 6-inch',
  },
  {
    meal_id: 2,
    ingredient_id: 1,
    measurement: '1lb',
  },
  {
    meal_id: 2,
    ingredient_id: 7,
    measurement: '3 cloves minced',
  },
  {
    meal_id: 2,
    ingredient_id: 14,
    measurement: '2 tbsp finely minced',
  },
  {
    meal_id: 2,
    ingredient_id: 15,
    measurement: '2 tsp',
  },
  {
    meal_id: 2,
    ingredient_id: 16,
    measurement: '2 tsp',
  },
  {
    meal_id: 2,
    ingredient_id: 17,
    measurement: '3 tbsp',
  },
  {
    meal_id: 2,
    ingredient_id: 18,
    measurement: '1 tbsp',
  },
  {
    meal_id: 2,
    ingredient_id: 19,
    measurement: '3 tbsp',
  },
  {
    meal_id: 2,
    ingredient_id: 20,
    measurement: '1 large',
  },
  {
    meal_id: 2,
    ingredient_id: 21,
    measurement: '1 can',
  },
  {
    meal_id: 2,
    ingredient_id: 22,
    measurement: '1/2 of a medium',
  },
  {
    meal_id: 2,
    ingredient_id: 23,
    measurement: '1-2 tbsp',
  },
  {
    meal_id: 2,
    ingredient_id: 24,
    measurement: '(optional) 2 tsp',
  },
  {
    meal_id: 2,
    ingredient_id: 8,
    measurement: '1/4 cup',
  },
  {
    meal_id: 2,
    ingredient_id: 25,
    measurement: '1/4 cup',
  },
  {
    meal_id: 2,
    ingredient_id: 26,
    measurement: 'use as needed',
  },
  {
    meal_id: 2,
    ingredient_id: 27,
    measurement: 'use as needed',
  },
  {
    meal_id: 2,
    ingredient_id: 28,
    measurement: 'Serve over/with',
  },
  {
    meal_id: 2,
    ingredient_id: 29,
    measurement: 'Serve with',
  },
  {
    meal_id: 3,
    ingredient_id: 1,
    measurement: '2 large',
  },
  {
    meal_id: 3,
    ingredient_id: 3,
    measurement: '15oz can',
  },
  {
    meal_id: 3,
    ingredient_id: 30,
    measurement: '15oz can',
  },
  {
    meal_id: 3,
    ingredient_id: 22,
    measurement: '1 medium',
  },
  {
    meal_id: 3,
    ingredient_id: 4,
    measurement: '15oz can',
  },
  {
    meal_id: 3,
    ingredient_id: 31,
    measurement: '10oz can',
  },
  {
    meal_id: 3,
    ingredient_id: 32,
    measurement: '1/2 cup',
  },
  {
    meal_id: 3,
    ingredient_id: 33,
    measurement: '1 tsp',
  },
  {
    meal_id: 3,
    ingredient_id: 34,
    measurement: '1 tsp',
  },
  {
    meal_id: 3,
    ingredient_id: 35,
    measurement: '0.4 oz packet',
  },
  {
    meal_id: 3,
    ingredient_id: 36,
    measurement: '8 oz package',
  },
];

const seedMealIngredients = () =>
  Meal_Ingredient.bulkCreate(mealIngredientData);

module.exports = seedMealIngredients;
