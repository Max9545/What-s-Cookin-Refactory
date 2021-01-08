class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  findRecipe(searchText) {
    return this.recipes.filter(recipe => {
      return recipe.ingredients.find(ingredient => {
        return recipe.tags.find(tag => {
          return (ingredient.name.includes(searchText) ||
            recipe.name.includes(searchText) || tag.includes(searchText))
        });
      })
    })
  }
}

export default Cookbook;