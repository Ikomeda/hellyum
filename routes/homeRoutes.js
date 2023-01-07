const router = require('express').Router();
const { Ingredients, Meal, Meal_Ingredient } = require('../models');

//GET all meals for hompage
router.get('/', async (req, res) => {
  try {
    const dbMealData = await Meal.findAll();

    const meals = dbMealData((meal) => {
      meal.get({ plain: true });
    });

    res.render('homepage', {
      meals,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/meal/:id', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    try {
      const dbMealData = await Meal.findByPk(req.params.id, {
        include: [
          {
            model: Ingredients,
            attributes: ['id', 'name'],
          },
          {
            model: Meal_Ingredient,
            attributes: ['id', 'meal_id', 'ingredient_id', 'measurement'],
          },
        ],
      });
      const meal = dbMealData.get({ plain: true });
      res.render('meal', { meal, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

//login screen
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
