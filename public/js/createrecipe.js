// const recipeFormHandler = async (event) => {
//   event.preventDefault();
//   const meal_name = document.querySelector('#meal_name').value;
//   const instructions = document.querySelector('#instructions').value;
//   const ingredients = document.querySelector('.ingredients').value;
//   const measurement = document.querySelector('.measurements').value;

//   console.log({ meal_name, instructions, ingredients, measurement });
//   const response = await fetch(`api/meal`, {
//     method: 'POST',
//     body: JSON.stringify({
//       meal_name,
//       instructions,
//       ingredients,
//       measurement,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   console.log(response);

//   if (response.ok) {
//     document.location.replace('/');
//     console.log(response);
//   } else {
//     alert('Failed to add recipe');
//     console.log(response);
//   }
// };

// document
//   .querySelector('#new-recipe-form')
//   .addEventListener('submit', recipeFormHandler);

//   Parker's try starts
async function handleMealCreation() {
  const createButton = document.querySelector('#create_button');
  const uploadImage = document.querySelector('#image-upload');
  const meal_name = document.querySelector('#meal_name').value.trim();
  const instructions = document.querySelector('#instructions').value.trim();
  const ingredients = document.querySelectorAll('.ingredients').value.trim();
  const measurement = document.querySelectorAll('.measurements').value.trim();

  const ingredientArr = Array.prototype.slice.call(ingredients);
  const measurementArr = Array.prototype.slice.call(measurement);

  console.log({ meal_name, instructions, ingredients, measurement });

  if (meal_name && instructions) {
    const response = await fetch('/api/meal', {
      method: 'POST',
      body: JSON.stringify({ meal_name, image, instructions }),
    });
    console.log(response);

    for (let i = 0; i < ingredientArr.length; i++) {
      const ingredientRes = await fetch('/api/ingredients', {
        method: 'POST',
        body: JSON.stringify({ name: ingredientArr[i] }),
      });
      const mealIngredientRes = await fetch('/api/meal', {
        method: 'POST',
        body: JSON.stringify({
          meal_id,
          ingredient_id,
          measurement: measurementArr[i],
        }),
      });
    }
    console.log(response);

    if (response.ok) {
      document.location.replace('/');
      console.log(response);
    } else {
      alert('Failed to add recipe');
      console.log(response);
    }
  }
}

document
  .querySelector('#new-recipe-form')
  .addEventListener('submit', handleMealCreation);
