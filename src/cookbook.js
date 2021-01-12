class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  findRecipe(searchText, data) {
    if (this.findRecipeByName(searchText)) {
      return this.findRecipeByName(searchText)
    } else if (this.findRecipeByTag(searchText)) {
      return this.findRecipeByTag(searchText);
    } else {
      return this.findRecipeByIngredient(searchText, data);
    }
    //now how the fuck do I apply byingredients?
  }

  findRecipeByName(searchText) {
    const byNames = this.recipes.filter(recipe => recipe.name.includes(this.capitalize(searchText)))
    if (byNames.length === 1) {
      return byNames[0];
    } else if (byNames.length > 1) {
      return byNames;
    }
  }

  findRecipeByTag(searchText) {
    const byTag = this.recipes.filter(recipe => recipe.tags.find(tag => tag.includes(searchText.toLowerCase())));
    if (byTag.length > 1) {
      return byTag;
    }
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