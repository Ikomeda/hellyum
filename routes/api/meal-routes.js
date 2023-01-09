const express = require('express');
const router = express.Router();
const { Meal, Meal_Ingredient, User, Ingredients } = require('../../models');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const app = express();

app.use(fileUpload({ useTempFiles: true }));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// GET all meals
router.get('/', async (req, res) => {
  try {
    const data = await Meal.findAll({
      include: [
        {
          model: Ingredients,
          attributes: ['id']['name'],
          // through: Meal_Ingredient,
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
        {
          model: Ingredients,
          through: Meal_Ingredient,
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
    const meal_name = req.body.meal_name;
    const instructions = req.body.instructions;
    const image = req.files.image;

    const cloudURL = await cloudinary.uploader.upload(image.tempFilePath);

    const mealObj = {
      meal_name,
      instructions,
      cloudURL,
    };

    const postMeal = Meal.create(mealObj);
    if (postMeal) return res.status(200).json({ message: 'Meal Created!' });
    return res.status(400).json({ message: 'Error in meal creation' });
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
