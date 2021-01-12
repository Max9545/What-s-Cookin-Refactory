class Cookbook {
    constructor(data) {
        this.recipes = data;
    }

  findRecipe(searchText) {
    if (this.findRecipeByName(searchText)) {
      console.log(this.findRecipeByName(searchText))
      return this.findRecipeByName(searchText)
    } 

    if (this.findRecipeByTag(searchText)) {
      return this.findRecipeByTag(searchText)
    }

  }

  findRecipeByName(searchText) {
    return this.recipes.find(recipe => recipe.name.includes(searchText))
  }

  findRecipeByTag(searchText) {
    return this.recipes.filter(recipe => recipe.tags.find(tag => tag.includes(searchText)));
    }

  findRecipeByIngredient() {

  }


  //totally separate out each function
  //need helper fx to compare recipes.id and ingreident
}

export default Cookbook;
