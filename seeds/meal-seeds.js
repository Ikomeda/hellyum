const { Meal } = require('../models');

const mealData = [
  {
    meal_name: 'Cowboy Quesadillas',
    instructions:
      'https://res.cloudinary.com/dtea4hok6/image/upload/v1673222409/02-cowboy-quesadillas_m6knlf.jpg',
    instructions:
      'Prepare the ingredients: shred the chicken and coat it with your favorite BBQ sauce. Make the Texas Caviar by combining all of the ingredients and stirring together. Heat a flour tortilla on a large skillet, add the shredded cheese, BBQ chicken and Texas Caviar on top. Add another tortilla on top. When the tortilla on the bottom is crisp and golden, carefully flip over to cook the other side.',
  },
  {
    meal_name: 'Coconut Curry Chicken',
    image:
      'https://res.cloudinary.com/dtea4hok6/image/upload/v1673222415/03-coconut-curry-chicken_tgyyaf.jpg',
    instructions:
      'Begin with prepping ingredients: mince the garlic, mince the ginger and dice the onion. Then peel ginger using a vegetable peeler or spoon then finely mince it. Thinly slice the red bell pepper in long vertical strips then cut these bits in horizontally. Heat 2 tbsp coconut-oil in a large-deep skillet over medium-high-heat. Then add the onion & saute for 3-5minutes, or till onions are starting to receive golden. Add the ginger and garlic. Stir to coat everything with all the oil. Reduce the heat to low then add the red curry paste, curry powder and coriander. Stir frequently for 2-3minutes, or till fragrant and lightly toasted. Return the heat to medium-high. Then add the remaining 1 tbsp coconut-oil & red pepper. Stir for a few minutes then add the bite-sized parts of chicken. Sprinkle on pepper and salt to taste (I add 1 tsp fine sea salt and ½ tsp pepper). Cook, stirring frequently about 4-5minutes, or till the chicken is browned on each side, but not cooked .  Pour in the brown sugar, coconut-milk and lime juice (to taste, I begin with only 1 tbsp). Stir till chicken is cooked through (juices run clear & its cooked to 165°F) and curry is a little thickened. If desired, stir in the fish sauce. Serve over rice with/or naan bread. Garnish dishes with basil, cilantro, or crushed cashews/peanuts. Serve extra lime wedges from both sides if desired.',
  },
  {
    meal_name: 'Instant Pot White Chicken Chili',
    image:
      'https://res.cloudinary.com/dtea4hok6/image/upload/v1673222422/04-instant-pot-chicken-chili_dfqfnk.jpg',
    instructions:
      'Step One: Place all of your ingredients into your instant pot bowl in the following order: 2 chicken breasts, drained black and white beans, chopped onion, corn with juice, tomatoes with juice, and 1/2 cup chicken broth. Step Two: Add 1/2 to 1 tsp chili powder (use 1/2 tsp to make it kid friendly), 1 tsp cumin, ranch packet. Stir everything to combine, getting some of the juice under the chicken to keep it from scorching. Step Three Cut cream cheese into 6 pieces and place over the top of chili. Cover and seal with lid, switch the valve to the "sealing" position and cook for 20 min on manual high pressure. Once it is done cooking, let it naturally depressurize for 10 min then switch the valve to the "venting" position to completely release steam before opening lid. Step Four: Remove the chicken breasts to a plate and shred apart with 2 forks. Stir everything together in the pot to melt the cream cheese into the chili then return the shredded chicken and stir to combine. Serve garnished with avocado and cilantro if desired.',
  },
];

const seedMeal = () => Meal.bulkCreate(mealData);

module.exports = seedMeal;
