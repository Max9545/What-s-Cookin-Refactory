import './css/base.scss';
import './css/styles.scss';



import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';
import domUpdates from './domUpdates';

const homeButton = document.querySelector('.home');
const favoriteButton = document.querySelector('.view-favorites');
const recipesToCookButton = document.querySelector('.view-to-cook');
const searchButton = document.querySelector('#search-button');
const cardArea = document.querySelector('.all-cards');

let user, users, pantry, cookbook, ingredientData;

window.onload = loadData();

homeButton.addEventListener("click", conditionalsCardButtons);
favoriteButton.addEventListener('click', viewFavorites);
recipesToCookButton.addEventListener('click', viewRecipesToCook);
searchButton.addEventListener('click', displaySearchRecipes);
cardArea.addEventListener("click", conditionalsCardButtons);


function loadData() {
  getIngredientData();
  getRecipeData();
  getUserData();
}
//should these three functions exist in donUpdates or in APIcalls, instead?

function getUserData() {
  fetch("http://localhost:3001/api/v1/users")
    .then((response) => response.json())
    .then(userData => users = userData)
    .then((userData) => onStartup());
}

function getIngredientData() {
  fetch("http://localhost:3001/api/v1/ingredients")
    .then(response => response.json())
    .then(data => {
      ingredientData = data;
      getRecipeData();
    })
}

function getRecipeData() {
  fetch("http://localhost:3001/api/v1/recipes")
    .then((response) => response.json())
    .then((recipeData) => {
      cookbook = new Cookbook(recipeData)
      cookbook.addIngredientNames(ingredientData)
      domUpdates.displayCards(cookbook.recipes, cardArea)
    })
}


function onStartup() {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = users.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry)
  pantry = new Pantry(newUser.pantry)
  domUpdates.greetUser(user);
  getFavorites();
}


function viewFavorites() {
  if (user.favoriteRecipes.length) {
    domUpdates.connectWithClassList('add', 'hidden', event, favoriteButton);
    domUpdates.displayCards(user.favoriteRecipes, cardArea);
    getFavorites();
  }
}

function viewRecipesToCook() {
  if (user.recipesToCook.length) {
    domUpdates.displayCards(user.recipesToCook, cardArea);
  }
  user.recipesToCook.forEach(recipe => {
    if (user.favoriteRecipes.includes(recipe)) {
      let recipeID = document.querySelector(`.favorite${recipe.id}`);
      domUpdates.connectWithClassList('add', 'favorite-active', event, recipeID);
    }
  })
}
//method needs to exist in user?

function favoriteCard(event) {
  let specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  if (!domUpdates.connectWithClassList('contains', 'favorite-active', event)) {
    domUpdates.connectWithClassList('add', 'favorite-active', event);
    user.addToFavorites(specificRecipe, 'favoriteRecipes');
  } else if (domUpdates.connectWithClassList('contains', 'favorite-active', event)) {
    domUpdates.connectWithClassList('remove', 'favorite-active', event);
    user.removeFromFavorites(specificRecipe, 'favoriteRecipes')
    domUpdates.displayCards(user.favoriteRecipes, cardArea);
    getFavorites();
  }
}

function addCardToCookList(event) {
  let specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  if (!domUpdates.connectWithClassList('contains', 'cook-list-active', event)) {
    domUpdates.connectWithClassList('add', 'cook-list-active', event);
    user.addToFavorites(specificRecipe, 'recipesToCook');
  } else if (domUpdates.connectWithClassList('contains', 'cook-list-active', event)) {
    domUpdates.connectWithClassList('remove', 'cook-list-active', event);
    user.removeFromFavorites(specificRecipe, 'recipesToCook')
  }
}
//use user method

function conditionalsCardButtons(event) {
  if (domUpdates.connectWithClassList('contains', 'favorite', event)) {
    favoriteCard(event);
  } else if (domUpdates.connectWithClassList('contains', 'add-button', event) || domUpdates.connectWithClassList('contains', 'add', event)) {
    addCardToCookList(event);
  } else if (domUpdates.connectWithClassList('contains', 'card-picture', event)) {
    displayDirections(event);
  } else if (domUpdates.connectWithClassList('contains', 'home', event)) {
    domUpdates.connectWithClassList('remove', 'hidden', event, favoriteButton);
    domUpdates.displayCards(cookbook.recipes, cardArea);
    getFavorites();
  }
}

function displayDirections(event) {
  domUpdates.connectWithClassList('remove', 'hidden', event, favoriteButton)
  let newRecipeInfo = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  let recipeObject = new Recipe(newRecipeInfo, ingredientData);
  let cost = recipeObject.calculateCost();
  let dollarCost = (cost / 100).toFixed(2);
  domUpdates.connectWithClassList('add', 'all', event, cardArea);
  domUpdates.populateRecipeCard(cardArea, recipeObject, dollarCost, ingredientData);
}

function getFavorites() {
  if (user.favoriteRecipes.length) {
    user.favoriteRecipes.forEach(recipe => {
      let recipeID = document.querySelector(`.favorite${recipe.id}`);
      domUpdates.connectWithClassList('add', 'favorite-active', event, recipeID);
    })
  }
}

function displaySearchRecipes(event) {
  event.preventDefault();
  const searchInput = document.querySelector('#search-input');
  const filteredRecipes = cookbook.findRecipe(searchInput.value, ingredientData);
  domUpdates.displayCards(filteredRecipes, cardArea);

  // filteredRecipes.forEach(recipe => {
  //   if (user.favoriteRecipes.includes(recipe)) {
  //     let recipeID = document.querySelector(`.favorite${recipe.id}`);
  //     domUpdates.connectWithClassList('add', 'favorite-active', event, recipeID);
  //   }
  // })
}