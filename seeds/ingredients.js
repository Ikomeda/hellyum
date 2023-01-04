const { Ingredients } = require('../models');

const ingredientdata = [
    {
        name: 'Chicken',
        price:
    },
    {
        name: 'BBQ Sauce',
        price:
    },
    {
        name: 'Black Bean Texas Caviar',
        price:
    },
    {
        name: 'Monterey Jack',
        price:
    },
    {
        name: 'Garlic',
        price:
    },
    {
        name: 'Ginger',
        price:
    },
    {
        name: 'Ground Coriander',
        price:
    },
    {
        name: 'Yellow Curry Powder',
        price:
    },
    {
        name: 'Red Curry Paste',
        price:
    },
    {
        name: 'Lime-Juice',
        price:
    },
    {
        name: 'Coconut Oil',
        price:
    },
    {
        name: 'Red Bell Pepper',
        price:
    },
    {
        name: 'Coconut Milk',
        price:
    },
    {
        name: 'Yellow Onion',
        price:
    },
    {
        name: 'Brown Sugar',
        price:
    },
    {
        name: 'Fish Sauce',
        price:
    },
    {
        name: 'Cilantro',
        price:
    },
    {
        name: '',
        price:
    },
    {
        name: '',
        price:
    },
    {
        name: '',
        price:
    },
    {
        name: '',
        price:
    },
    {
        name: '',
        price:
    },
    
];

const seedIngredients = () => Meal.bulkCreate(ingredientdata);

module.exports = seedIngredients;;