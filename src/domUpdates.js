let domUpdates = {

  displayCards(recipesList, cardArea) {
    cardArea.classList.remove('all')
    cardArea.innerHTML = '';
    if (Array.isArray(recipesList)) {
      recipesList.forEach(recipe => {
        cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
       class='card'>
       <header id='${recipe.id}' class='card-header'>
       <label for='add-button' class='hidden'>Click to add recipe</label>
       <button id='${recipe.id}'  class='add-button card-button' aria-label='add to my recipes button'>
       <img id='${recipe.id}' class='add'
       src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
       recipes to cook'></button>
       <label for='favorite-button' class='hidden'>Click to favorite recipe
       </label>
       <button id='${recipe.id}'class='favorite favorite${recipe.id} card-button' aria-label='add to my favorites button'>
       </button></header>
       <img id='${recipe.id}' tabindex='0' class='card-picture'
       src='${recipe.image}' alt='Food from recipe'>
       <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
       </div>`)
      });
    } else {
      const recipe = recipesList;

      cardArea.innerHTML = `<div id='${recipe.id}'
      class='card'>
      <header id='${recipe.id}' class='card-header'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button id='${recipe.id}'  class='add-button card-button' aria-label='add to my recipes button'>
      <img id='${recipe.id}' class='add'
      src='https://image.flaticon.com/icons/svg/32/ 32339.svg' alt='Add to
      recipes to cook'></button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe
      </label>
      <button id='${recipe.id}'class='favorite favorite${recipe.id} card-button' aria-label='add to my favorites button'>
      </button></header>
      <img id='${recipe.id}' tabindex='0' class='card- picture'
      src='${recipe.image}' alt='Food from recipe'>
      <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
      </div>`
    }
  },

  displayNoResults(cardArea) {
    cardArea.innerHTML = `<article class='no-results'>Sorry, we couldn't find anything matching your search criteria. Try something else!</article>`
  },

  greetUser(user) {
    const userName = document.querySelector('.user-info');
    userName.innerText = `Welcome, ${user.name}.`;
  },

  connectWithClassList(method, className, event, element) {
    if (method === 'add' && element) {
      element.classList.add(className);
    } else if (method === 'remove' && element) {
      element.classList.remove(className);
    } else if (method === 'add' && element === undefined) {
      event.target.classList.add(className);
    } else if (method === 'remove' && element === undefined) {
      event.target.classList.remove(className);
    } else if (method === 'contains') {
      return event.target.classList.contains(className);
    }
  },

  populateRecipeCard(cardArea, recipeObject, costInDollars) {
    cardArea.innerHTML = `<h2>${recipeObject.name}</h2>
    <p class='all-recipe-info'>
    It will cost: <span class='cost recipe-info'>
    $${costInDollars}</span><br><br>
    You will need:<span class='ingredients recipe-info'></span>
    Instructions:<ol><span class='instructions recipe-info'>
    </span></ol>
    </p>`;
    const ingredientsSpan = document.querySelector('.ingredients');
    const instructionsSpan = document.querySelector('.instructions');
    recipeObject.ingredients.forEach(ingredient => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
      ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
      ${ingredient.name} </li></ul>
      `)
    });
    recipeObject.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', `<li>
      ${instruction.instruction}</li>
      `)
    });
  }
}
export default domUpdates;