const router = require('express').Router();
const {
  Ingredients,
  Meal_Date,
  Meal_Ingredients,
  Meal,
  User,
} = require('../models');

router.get('/', async (req, res) => {
  try {
    const mealDateData = await Meal_Date.findAll({
      include: [
        {
          model: Meal,
          attributes: ['name'],
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
