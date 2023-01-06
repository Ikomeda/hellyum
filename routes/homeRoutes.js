const router = require('express').Router();
const { Ingredients, Meal, User } = require('../models');

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

//login screen
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
