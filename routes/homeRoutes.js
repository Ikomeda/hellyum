const router = require('express').Router();
const { Ingredients, Meal, Meal_Ingredient } = require('../models');

//GET all meals for homepage
router.get('/', async (req, res) => {
  if (!req.session.logged_in) {
    res.render('landing');
    return;
  } else {
    try {
      const dbMealData = await Meal.findAll(req.params);
      console.log({dbMealData});

      const meals = dbMealData.map((meal) =>
      meal.get({ plain: true})
      );
      console.log({meals});

      res.render('homepage', {
        meals,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  console.log(req.session);
});

router.get('/meal/:id', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
  try {
    const dbMealData = await Meal.findByPk(req.params.id, {
      include: [
        {
          model: Ingredients,
          through: Meal_Ingredient,
        },
      ],
    });
    const meal = dbMealData.get({ plain: true });
    res.render('recipe', { meal });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}});

router.get('/create-recipe', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
      res.render('create-recipe')
}});

//login screen
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
