class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  findRecipe(searchText) {
    if (this.findRecipeByName(searchText)) {
      console.log('name conditional');
      return this.findRecipeByName(searchText);
    } else if (this.findRecipeByTag(searchText) !== []) {
      console.log('tag conditional');
      return this.findRecipeByTag(searchText);
    } else {
      console.log('ingredient conditional')
      return this.findRecipeByIngredient(searchText, data);
    }
  }

  findRecipeByName(searchText) {
    return this.recipes.find(recipe => recipe.name.includes(this.capitalize(searchText)))
  }

  findRecipeByTag(searchText) {
    return this.recipes.filter(recipe => recipe.tags.find(tag => tag.includes(searchText.toLowerCase())));
  }

  findRecipeByIngredient(searchText, data) {
    const ingredientWithName = data.find(ingredient => ingredient.name.includes(searchText.toLowerCase()))
    const matchingRecipes = this.recipes.filter(recipe =>
      recipe.ingredients.find(ingredient => ingredient.id === ingredientWithName.id));
    return matchingRecipes;
  }

  capitalize(searchText) {
    return searchText.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}

export default Cookbook;