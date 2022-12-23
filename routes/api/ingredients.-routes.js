const router = require('express').Router();
const { User, Meal_Date, Meal_Ingredient } = require('../../models');

// GET all ingredients
router.get('/', async (req, res) => {
  try {
    const data = await User.findAll({
      include: [
        { model: Meal, through: Meal_Ingredient, as: 'meal_ingredient_meal' },
      ],
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one user
router.get('/:id', async (req, res) => {
  try {
    const data = await User.findByPk(req.params.id, {
      include: [
        { model: Meal, through: Meal_Ingredient, as: 'meal_ingredient_meal' },
      ],
    });
    if (!data) {
      res.status(404).json({ message: 'No ingredient with this id' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const data = await User.create({
      name: req.body.name,
      price: req.body.price,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE user
router.put('/:id', async (req, res) => {
  try {
    const data = await User.update(
      {
        name: req.body.name,
        price: req.body.price,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!data[0]) {
      res.status(404).json({ message: 'No ingredient with this id' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE User
router.delete('/:id', async (req, res) => {
  try {
    const data = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!data) {
      res.status(404).json({ message: 'No ingredient with this id' });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
