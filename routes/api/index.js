const router = require('express').Router();
const ingredientRoutes = require('./ingredients-routes');
const mealRoutes = require('./meal-routes');

router.use('/meals', mealRoutes);
router.use('/ingredients', ingredientRoutes);

module.exports = router;
