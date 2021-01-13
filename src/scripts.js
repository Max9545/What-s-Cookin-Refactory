import './css/styles.scss';

import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';
import domUpdates from './domUpdates';

const homeButton = document.querySelector('.home');
const viewFavoritesButton = document.querySelector('.view-favorites');
const viewRecipesToCookButton = document.querySelector('.view-to-cook');
const searchButton = document.querySelector('#search-button');
const cardArea = document.querySelector('.all-cards');

let user, users, cookbook, ingredientData;

window.onload = loadData();

homeButton.addEventListener('click', conditionalsCardButtons);
viewFavoritesButton.addEventListener('click', viewFavorites);
viewRecipesToCookButton.addEventListener('click', viewRecipesToCook);
searchButton.addEventListener('click', displaySearchRecipes);
cardArea.addEventListener('click', conditionalsCardButtons);

//API calls
function loadData() {
  getIngredientData();
  getRecipeData();
  getUserData();
}

function getUserData() {
  fetch('http://localhost:3001/api/v1/users')
    .then((response) => response.json())
    .then(userData => users = userData)
    .then(() => onStartup())
}

function getIngredientData() {
  fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json())
    .then(data => {
      ingredientData = data
      getRecipeData()
    })
}

function getRecipeData() {
  fetch('http://localhost:3001/api/v1/recipes')
    .then((response) => response.json())
    .then((recipeData) => {
      cookbook = new Cookbook(recipeData)
      cookbook.addIngredientNames(ingredientData)
      domUpdates.displayCards(cookbook.recipes, cardArea)
    })
}

function onStartup() {
  const userId = (Math.floor(Math.random() * 49) + 1);
  const newUser = users.find(user => user.id === Number(userId));
  user = new User(userId, newUser.name, newUser.pantry);
  domUpdates.greetUser(user);
  getFavorites();
  getRecipesToCook();
}

function viewFavorites() {
  if (user.favoriteRecipes.length) {
    domUpdates.connectWithClassList('add', 'hidden', event, viewFavoritesButton);
    domUpdates.displayCards(user.favoriteRecipes, cardArea);
    getFavorites();
  }
}

function viewRecipesToCook() {
  if (user.recipesToCook.length) {
    domUpdates.connectWithClassList('add', 'hidden', event, viewRecipesToCookButton);
    domUpdates.displayCards(user.recipesToCook, cardArea);
    getRecipesToCook();
  }
}

function favoriteCard(event) {
  const specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id));

  if (!domUpdates.connectWithClassList('contains', 'favorite-active', event)) {
    domUpdates.connectWithClassList('add', 'favorite-active', event);
    user.addToFavorites(specificRecipe, 'favoriteRecipes');
  } else if (domUpdates.connectWithClassList('contains', 'favorite-active', event)) {
    domUpdates.connectWithClassList('remove', 'favorite-active', event);
    user.removeFromFavorites(specificRecipe, 'favoriteRecipes');
    domUpdates.displayCards(user.favoriteRecipes, cardArea);
    getFavorites();
  }
}

function addCardToCookList(event) {
  const specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))

  if (!domUpdates.connectWithClassList('contains', 'cook-list-active', event)) {
    domUpdates.connectWithClassList('add', 'cook-list-active', event);
    user.addToRecipesToCook(specificRecipe, 'recipesToCook');
  } else if (domUpdates.connectWithClassList('contains', 'cook-list-active', event)) {
    domUpdates.connectWithClassList('remove', 'cook-list-active', event);
    user.removeFromRecipesToCook(specificRecipe, 'recipesToCook');
    domUpdates.displayCards(user.recipesToCook, cardArea);
    getRecipesToCook();
  }
}

function conditionalsCardButtons(event) {
  if (domUpdates.connectWithClassList('contains', 'favorite', event)) {
    favoriteCard(event);
  } else if (domUpdates.connectWithClassList('contains', 'add-button', event) || domUpdates.connectWithClassList('contains', 'add', event)) {
    addCardToCookList(event);
  } else if (domUpdates.connectWithClassList('contains', 'card-picture', event)) {
    displayDirections(event);
  } else if (domUpdates.connectWithClassList('contains', 'home', event)) {
    domUpdates.connectWithClassList('remove', 'hidden', event, viewFavoritesButton);
    domUpdates.displayCards(cookbook.recipes, cardArea);
    getFavorites();
  }
}

function displayDirections(event) {
  domUpdates.connectWithClassList('remove', 'hidden', event, viewFavoritesButton);
  const newRecipeInfo = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id));
  const recipeObject = new Recipe(newRecipeInfo, ingredientData);
  const cost = recipeObject.calculateCost();
  const dollarCost = (cost / 100).toFixed(2);
  domUpdates.connectWithClassList('add', 'all', event, cardArea);
  domUpdates.populateRecipeCard(cardArea, recipeObject, dollarCost, ingredientData);
}

function getFavorites() {
  if (user.favoriteRecipes.length) {
    user.favoriteRecipes.forEach(recipe => {
      const recipeID = document.querySelector(`.favorite${recipe.id}`);
      domUpdates.connectWithClassList('add', 'favorite-active', event, recipeID);
    })
  }
}

function getRecipesToCook() {
  if (user.recipesToCook.length) {
    user.recipesToCook.forEach(recipe => {
      const recipeID = document.querySelector(`.recipe${recipe.id}`);
      domUpdates.connectWithClassList('add', 'cook-list-active', event, recipeID);
    })
  }
}

function displaySearchRecipes(event) {
  event.preventDefault();
  const searchInput = document.querySelector('#search-input');
  const filteredRecipes = cookbook.findRecipe(searchInput.value, ingredientData);
  if (filteredRecipes.length) {
    domUpdates.displayCards(filteredRecipes, cardArea);
  } else {
    domUpdates.displayNoResults(cardArea);
  }
}