const router = require('express').Router();
const ingredientRoutes = require('./ingredients-routes');
const mealRoutes = require('./meal-routes');
const userRoutes = require('./user-routes');

router.use('/meal', mealRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/users', userRoutes);

module.exports = router;
