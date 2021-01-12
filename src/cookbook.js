class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  findRecipe(searchText) {
    if (this.findRecipeByName(searchText.capitalize())) {
      return this.findRecipeByName(searchText);
    } else if (this.findRecipeByTag(searchText)) {
      return this.findRecipeByTag(searchText);
    }

  }

  findRecipeByName(searchText) {
    return this.recipes.find(recipe => recipe.name.includes(capitalize(searchText)))
  }

  findRecipeByTag(searchText) {
    return this.recipes.filter(recipe => recipe.tags.find(tag => tag.includes(searchText.toLowerCase())));
  }

  findRecipeByIngredient() {
    //include to lowercase
  }

  capitalize(searchText) {
    return searchText.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  //totally separate out each function
  //need helper fx to compare recipes.id and ingreident
}

export default Cookbook;