const router = require('express').Router();
const {
  Ingredients,
  Meal_Ingredient,
  Meal,
  User,
} = require('../models');

router.get('/', async (req, res) => {
  try {
    const mealDateData = await Meal.findAll({
      include: [
        {
          model: Meal,
          attributes: ['meal_name'],
        },
      ],
    });

    const plannedMeals = mealDateData.map((meal) => meal.get({ plain: true }));

    res.render('homepage', {
      plannedMeals,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
