const { Ingredients } = require('../models');

const ingredientData = [
  {
    name: 'Chicken',
  },
  {
    name: 'BBQ Sauce',
  },
  {
    name: 'Black Bean Texas Caviar',
  },
  {
    name: 'Monterey Jack',
  },
  {
    name: 'Garlic',
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
    name: 'Coconut Milk',
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
    name: 'Cilantro',
  },
  {
    name: '',
  },
  {
    name: '',
  },
  {
    name: '',
  },
  {
    name: '',
  },
  {
    name: '',
  },
];

const seedIngredients = () => Ingredients.bulkCreate(ingredientData);

module.exports = seedIngredients;
