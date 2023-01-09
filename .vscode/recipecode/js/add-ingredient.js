var ingredients = document.getElementById('ingredients');
var add_ingredient = document.getElementById('add-ingredient');
add_ingredient.onclick = function (){
    var newIngredient = document.createElement('input');
    newIngredient.setAttribute('type','text');
    newIngredient.setAttribute('name', 'ingredients[]')
    newIngredient.setAttribute('class', 'ingredients')
    newIngredient.setAttribute('size',50);
    newIngredient.setAttribute('placeholder', 'add ingredient')
    ingredients.appendChild(newIngredient);
}
