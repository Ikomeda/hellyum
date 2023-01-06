const router = require('express').Router();
const {
  Meal,
  Meal_Date,
  Meal_Ingredient,
  User,
  Ingredients,
} = require('../../models');

// GET all meals
router.get('/', async (req, res) => {
  try {
    const data = await Meal.findAll({
      include: [
        // { model: User, through: Meal_Date, as: 'meal_date_user' },
        {
          model: Ingredients,
          through: Meal_Ingredient,
          // as: 'meal_ingredient-ingredient',
        },
      ],
    });
    console.log(data);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one meal
router.get('/:id', async (req, res) => {
  try {
    const data = await Meal.findByPk(req.params.id, {
      include: [
        // { model: User, through: Meal_Date, as: 'meal_date_user' },
        {
          model: Ingredients,
          through: Meal_Ingredient,
          // as: 'meal_ingredient-ingredient',
        },
      ],
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

// CREATE new meal
router.post('/', async (req, res) => {
  try {
    const data = await Meal.create({
      meal_name: req.body.meal_name,
      image: req.body.image,
      instructions: req.body.instructions,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE meal
router.put('/:id', async (req, res) => {
  try {
    const data = User.update(
      {
        meal_name: req.body.meal_name,
        image: req.body.image,
        instructions: req.body.instructions,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
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
