var ingredient = document.getElementById('ingredients');
var add_ingredient = document.getElementById('add-ingredient');


add_ingredient.onclick = function (){
    var newIngredient = document.createElement('input');
    newIngredient.setAttribute('type','text');
    newIngredient.setAttribute('name', 'ingredients[]')
    newIngredient.setAttribute('class', 'ingredients')
    newIngredient.setAttribute('size',20);
    newIngredient.setAttribute('placeholder', 'add ingredient')
    ingredient.appendChild(newIngredient);

    var newMeasurement = document.createElement('input');
    newMeasurement.setAttribute('type','text');
    newMeasurement.setAttribute('name', 'measurements[]')
    newMeasurement.setAttribute('class', 'measurements')
    newMeasurement.setAttribute('size',20);
    newMeasurement.setAttribute('placeholder', 'add measurement')
    ingredient.appendChild(newMeasurement);

    
}

    const recipeFormHandler = async (event) => {
    event.preventDefault();
    const meal_name = document.querySelector('#meal_name').value;
    const instructions = document.querySelector('#instructions').value;
    const ingredients = document.querySelector('.ingredients').value;
    const measurement = document.querySelector('.measurements').value;

    console.log({meal_name, instructions, ingredients, measurement});
    const response = await fetch(`api/meal`, {
      method: 'POST',
      body: JSON.stringify({
        meal_name,
        instructions, 
        ingredients,
        measurement,
      }),
      headers: {
          'Content-Type': 'application/json',
        },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace('/');
      console.log(response);
    } else {
      alert('Failed to add recipe');
      console.log(response);
    }
  }
  
  document
    .querySelector('#new-recipe-form')
    .addEventListener('submit', recipeFormHandler);