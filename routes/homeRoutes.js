const router = require('express').Router();
const { Ingredients, Meal, Meal_Ingredient } = require('../models');

//GET all meals for hompage
router.get('/', async (req, res) => {
  res.render('landing');
  console.log(req.session);
  // try {
  //   const dbMealData = await Meal.findAll();

  //   const meals = dbMealData((meal) => {
  //     meal.get({ plain: true });
  //   });

  //   res.render('homepage', {
  //     meals,
  //     // loggedIn: req.session.loggedIn,
  //   });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
});

router.get('/meal/:id', async (req, res) => {
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  // } else {
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
});

//login screen
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
