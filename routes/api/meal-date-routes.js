const router = require('express').Router();
const { Meal, Meal_Date, User } = require('../../models');

// GET all meals-dates
router.get('/', async (req, res) => {
  try {
    const data = await Meal_Date.findAll();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one meal-date
router.get('/:id', async (req, res) => {
  try {
    const data = await Meal.findByPk(req.params.id);
    if (!data) {
      res.status(404).json({ message: 'No meal with this id' });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new meal
router.post('/', async (req, res) => {
  try {
    const data = await Meal.create();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE meal
router.put('/:id', async (req, res) => {
  try {
    const data = User.update({
      where: {
        id: req.params.id,
      },
    });
    if (!data[0]) {
      res.status(404).json({ message: 'No user with this id' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE meal
router.delete('/:id', async (req, res) => {
  try {
    const data = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!data) {
      res.status(404).json({ message: 'No meal with this id' });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
