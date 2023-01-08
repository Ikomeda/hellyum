const { Ingredients } = require('../models');

const ingredientData = [
  {
    name: 'Chicken Breast',
  },
  {
    name: 'BBQ Sauce',
  },
  {
    name: 'Black Beans',
  },
  {
    name: 'Whole Kernel Corn',
  },
  {
    name: 'Jalapeno',
  },
  {
    name: 'Red Onion',
  },
  {
    name: 'Garlic',
  },
  {
    name: 'Cilantro',
  },
  {
    name: 'White Wine Vinegar',
  },
  {
    name: 'Extra Virgin Olive Oil',
  },
  {
    name: 'Honey',
  },
  {
    name: 'Monterey Jack Cheese',
  },
  {
    name: 'Flour Tortillas',
  },
  {
    name: 'Ginger',
  },
  {
    name: 'Ground Coriander',
  },
  {
    name: 'Yellow Curry Powder',
  },
  {
    name: 'Red Curry Paste',
  },
  {
    name: 'Lime-Juice',
  },
  {
    name: 'Coconut Oil',
  },
  {
    name: 'Red Bell Pepper',
  },
  {
    name: 'Full Fat Coconut Milk',
  },
  {
    name: 'Yellow Onion',
  },
  {
    name: 'Brown Sugar',
  },
  {
    name: 'Fish Sauce',
  },
  {
    name: 'Basil',
  },
  {
    name: 'Sea-Salt',
  },
  {
    name: 'Pepper',
  },
  {
    name: 'Basmati Rice',
  },
  {
    name: 'Naan Bread',
  },
  {
    name: 'White Beans',
  },
  {
    name: 'Rotel Diced Tomatoes with Green Chilis',
  },
  {
    name: 'Chicken Broth/Stock',
  },
  {
    name: 'Chili Powder',
  },
  {
    name: 'Cumin Powder',
  },
  {
    name: 'Ranch dip or Dressing Mix',
  },
  {
    name: 'Cream Cheese',
  },
];

const seedIngredients = () => Ingredients.bulkCreate(ingredientData);

module.exports = seedIngredients;
