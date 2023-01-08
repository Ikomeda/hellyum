const router = require('express').Router();
const { User, Meal, Meal_Ingredient, Ingredients } = require('../../models');

// GET all ingredients
router.get('/', async (req, res) => {
  try {
    const data = await Ingredients.findAll({
      include: [{ model: Meal, through: Meal_Ingredient }],
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // GET one Ingredients
// router.get('/:id', async (req, res) => {
//   try {
//     const data = await Ingredients.findByPk(req.params.id, {
//       include: [{ model: Meal, through: Meal_Ingredient }],
//     });
//     if (!data) {
//       res.status(404).json({ message: 'No ingredient with this id' });
//       return;
//     }
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// CREATE new Ingredients
router.post('/', async (req, res) => {
  try {
    const data = await Ingredients.create({
      name: req.body.name,
      price: req.body.price,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE Ingredients
router.put('/:id', async (req, res) => {
  try {
    const data = await Ingredients.update(
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

//DELETE Ingredients
router.delete('/:id', async (req, res) => {
  try {
    const data = await Ingredients.destroy({
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
