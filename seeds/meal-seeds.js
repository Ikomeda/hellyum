const { Meal } = require('../models');

const mealData = [
  {
    meal_name: 'Cowboy Quesadillas',
    image: 'https://houseofyumm.com/wp-content/uploads/2016/05/Cowboy-Quesadillas-18-680x520.jpg',
    instructions:
      'Prepare the ingredients: shred the chicken and coat it with your favorite BBQ sauce. Make the Texas Caviar by combining all of the ingredients and stirring together. Heat a flour tortilla on a large skillet, add the shredded cheese, BBQ chicken and Texas Caviar on top. Add another tortilla on top. When the tortilla on the bottom is crisp and golden, carefully flip over to cook the other side.',
  },
  {
    meal_name: 'Coconut Curry Chicken',
    image: '03-coconut-curry-chicken.jpg',
    instructions:
      'Begin with prepping ingredients: mince the garlic, mince the ginger and dice the onion. Then peel ginger using a vegetable peeler or spoon then finely mince it. Thinly slice the red bell pepper in long vertical strips then cut these bits in horizontally. Heat 2 tbsp coconut-oil in a large-deep skillet over medium-high-heat. Then add the onion & saute for 3-5minutes, or till onions are starting to receive golden. Add the ginger and garlic. Stir to coat everything with all the oil. Reduce the heat to low then add the red curry paste, curry powder and coriander. Stir frequently for 2-3minutes, or till fragrant and lightly toasted. Return the heat to medium-high. Then add the remaining 1 tbsp coconut-oil & red pepper. Stir for a few minutes then add the bite-sized parts of chicken. Sprinkle on pepper and salt to taste (I add 1 tsp fine sea salt and ½ tsp pepper). Cook, stirring frequently about 4-5minutes, or till the chicken is browned on each side, but not cooked .  Pour in the brown sugar, coconut-milk and lime juice (to taste, I begin with only 1 tbsp). Stir till chicken is cooked through (juices run clear & its cooked to 165°F) and curry is a little thickened. If desired, stir in the fish sauce. Serve over rice with/or naan bread. Garnish dishes with basil, cilantro, or crushed cashews/peanuts. Serve extra lime wedges from both sides if desired.',
  },
  {
    meal_name: 'Instant Pot White Chicken Chili',
    image: '04-instant-pot-chicken-chili.jpg',
    instructions:
      'Step One: Place all of your ingredients into your instant pot bowl in the following order: 2 chicken breasts, drained black and white beans, chopped onion, corn with juice, tomatoes with juice, and 1/2 cup chicken broth. Step Two: Add 1/2 to 1 tsp chili powder (use 1/2 tsp to make it kid friendly), 1 tsp cumin, ranch packet. Stir everything to combine, getting some of the juice under the chicken to keep it from scorching. Step Three Cut cream cheese into 6 pieces and place over the top of chili. Cover and seal with lid, switch the valve to the "sealing" position and cook for 20 min on manual high pressure. Once it is done cooking, let it naturally depressurize for 10 min then switch the valve to the "venting" position to completely release steam before opening lid. Step Four: Remove the chicken breasts to a plate and shred apart with 2 forks. Stir everything together in the pot to melt the cream cheese into the chili then return the shredded chicken and stir to combine. Serve garnished with avocado and cilantro if desired.',
  },
  {
    meal_name: 'Grilled Hamburgers',
    image: '05-grilled-hamburger.jpg',
    instructions:
      'Step One: In a large mixing bowl add the ground beef and then sprinkle the remaining ingredients on top. Step Two: Fold the meat a few times to incorporate the ingredients. This should take only about 30 to 45 seconds. Do NOT overmix the meat. Step Three: On a large plate or serving tray lined with parchment paper place your meat in the center. Score the meat with the side of your hand into 6 evenly spaced sections. Step Four: Tear off each section and carefully form each into a patty that is approximately one inch thick and 4 inches across. As you form the patty, be sure to form it with a ½ inch indention in the center. Step Five: Cover the formed patties with plastic wrap and transfer to the refrigerator until ready to grill. Step Six: Heat your grill to Medium-HIGH heat. Step Seven: Place patties on the grill over direct heat. Cook for 3 minutes, then flip. Do NOT press down on the patties.',
  },
  {
    meal_name: 'Lasagna Soup',
    image: '06-lasagna-soup.jpg',
    instructions:
      'Step One: Heat one tablespoon olive oil in a large pot over medium-high heat. Once hot, crumble beef into pot, season with salt and pepper to taste and cook, stirring occasionally until browned. Drain fat from beef and set beef aside. Step Two: Heat remaining 1 Tbsp olive oil in pot, add chopped yellow onion and saute until it begins to soften, about 3 minutes. Add in garlic and saute 30 seconds longer. Step Three: Add in chicken broth, diced tomatoes, crushed tomatoes, tomato paste, basil, oregano, rosemary, thyme, browned ground beef and season with salt and pepper to taste.  Step Four: Bring just to a boil, then reduce heat to medium-low, cover and simmer 20 minutes. Step Five: Meanwhile, prepare lasagna noodles according to directions listed on package. Step Six: In a mixing bowl, using a fork, stir together mozzarella, parmesan and ricotta. Step Seven: Stir cooked pasta into soup along with parsley, then thin soup with a little more broth if desired. Step Seven: Ladle soup into bowls, dollop with a large scoop of the cheese mixture and sprinkle with chopped parsley (cheese will melt well once stirred into soup).',
  },
  {
    meal_name: 'Creamy Chicken and Gnocchi',
    image: '07-creamy-chicken-and-gnocchi.jpg',
    instructions:
      'Step One: Preheat oven to 400 degrees F. Step Two: In a large pot of boiling salted water, cook gnocchi according to package instructions; drain well. Step Three: Season chicken with 3/4 teaspoon salt and 1/2 teaspoon pepper. Step Four: Melt 2 tablespoons butter in a large skillet over medium heat. Step Five: Working in batches, add chicken to the skillet in a single layer and cook until golden brown and cooked through, reaching an internal temperature of 165 degrees F, about 4-5 minutes per side; set aside. Step Six: Melt remaining 3 tablespoons butter. Add shallot, and cook, stirring frequently, until tender, about 3-5 minutes. Stir in garlic and thyme until fragrant, about 1 minute. Step Seven: Whisk in flour until lightly browned, about 1 minute. Step Eight: Gradually whisk in chicken broth and wine, and cook, whisking constantly, until slightly thickened, about 3-5 minutes. Stir in half and half until thickened, about 1-2 minutes; season with salt and pepper, to taste. Step Nine: Stir in gnocchi and kale until the kale has wilted, about 1-2 minutes. Return chicken to the skillet; sprinkle with Parmesan. Step Ten: Place into oven and bake until bubbly, about 10-12 minutes. Step Eleven: Serve immediately.',
  },
  {
    meal_name: 'Easy Cheesy Garlic Bread',
    image: '08-cheesy-garlic-bread',
    instructions:
      'Start this recipe with garlic butter. Let the butter go soft and crush the garlic in a pestle and mortar. Then mince the fresh parsley. Then add the garlic and finely chopped parsley to the butter. Stir the garlic and parsley until you have well-combined butter. Cut the loaf of bread in half, length way, and spread the garlic butter on the inside of the bread. Preheat the oven to 350℉/175℃. Put the halved bread on a baking tray buttered side up. Bake the bread in the middle of the oven for 15 minutes. Take the bread out of the oven. Turn the oven to broil. Then first sprinkle the parmesan on the bread. Then cover all of the bread with the hard mozzarella including the edges. Return the baking tray under the broiler for 4-5 minutes or until the cheese is bubbling and has brown patches. Sprinkle some finely chopped fresh parsley on top and serve straight away.',
  },
  // {
  //     meal_name: 'Spicy Shrimp Tacos',
  //     // this one doesn't really have instructions
  //     image:
  //     instructions:
  // },
  // {
  //     meal_name:
  //     image:
  //     instructions:
  // },
  // {
  //     meal_name:
  //     image:
  //     instructions:
  // },
];

const seedMeal = () => Meal.bulkCreate(mealData);

module.exports = seedMeal;
