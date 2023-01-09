var ingredient = document.getElementById('ingredients');
var add_ingredient = document.getElementById('add-ingredient');

add_ingredient.onclick = function () {
  var newIngredient = document.createElement('input');
  newIngredient.setAttribute('type', 'text');
  newIngredient.setAttribute('name', 'ingredients[]');
  newIngredient.setAttribute('class', 'ingredients');
  newIngredient.setAttribute('size', 20);
  newIngredient.setAttribute('placeholder', 'add ingredient');
  ingredient.appendChild(newIngredient);

  var newMeasurement = document.createElement('input');
  newMeasurement.setAttribute('type', 'text');
  newMeasurement.setAttribute('name', 'measurements[]');
  newMeasurement.setAttribute('class', 'measurements');
  newMeasurement.setAttribute('size', 20);
  newMeasurement.setAttribute('placeholder', 'add measurement');
  ingredient.appendChild(newMeasurement);
};
