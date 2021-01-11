class Cookbook {
    constructor(data) {
        this.recipes = data;
    }

  findRecipe(searchText) {
    //include a conditional to circumnavigate problem, maybe?
    //if it's a tag
    //if it's a name(partial or otherwise)
    //if it's an ingredient


  //find a recipe with that searchText as its name

  //if that fails, then, filter recipes with that searchText in the ingredients
  //if that fails, then filter recipes with that searchText in the tags
  //if that fails: alert, sorry or something like that.
      const searchResult = this.recipes.filter(recipe => {
       return recipe.ingredients.find(ingredient => {
        return  recipe.tags.find(tag => {
          return (recipe.name.includes (searchText) || ingredient.name.includes(searchText) || tag.includes(searchText))
        });
      })
    })
    return searchResult;
  }

  // findByTag
}

export default Cookbook;
