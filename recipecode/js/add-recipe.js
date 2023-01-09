async function newFormHandler(event) {
    event.preventDefault();
    const recipe_name = document.querySelector('#recipe_name').value;
    const recipe = document.querySelector('#recipe').value;
    const username = document.querySelector('#username').value;

    const response = await fetch(`/meal/ingredient.js`, {
      method: 'POST',
      body: JSON.stringify({
        recipe_name,
        username, 
        recipe,        
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.add) {
      document.location.replace('/');
    } else {
      alert('Failed to add recipe');
    }
  }
  
  document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);
    