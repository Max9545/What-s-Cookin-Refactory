class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  addIngredientNames(ingredientsData) {
    this.recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        let ingredientObject = ingredientsData.find(ingredientData => ingredient.id === ingredientData.id)
        if (ingredientObject.id === ingredient.id) {
          ingredient.name = ingredientObject.name;
        }
      })
    })
  }

  findRecipe(searchText) {
    if (this.findAllRecipes(searchText)) {
      return this.checkForDuplicates(this.findAllRecipes(searchText));
    } else if (this.findRecipeByName(searchText)) {
      return this.findRecipeByName(searchText)
    } else if (this.findRecipeByTag(searchText)) {
      return this.findRecipeByTag(searchText);
    } else if (this.findRecipeByIngredient(searchText)) {
      return this.findRecipeByIngredient(searchText);
    }
  }

  findRecipeByName(searchText) {
    const byNames = this.recipes.filter(recipe => recipe.name.includes(this.capitalize(searchText)))
    if (byNames.length) {
      return byNames;
    }
  }

  findRecipeByTag(searchText) {
    const byTag = this.recipes.filter(recipe => recipe.tags.find(tag => tag.includes(searchText.toLowerCase())));
    if (byTag.length) {
      return byTag;
    }
  }

  findRecipeByIngredient(searchText) {
    return this.recipes.filter(recipe => recipe.ingredients.find(ingredient => {
      if (ingredient.name.includes(searchText.toLowerCase())) {
        return recipe;
      }
    }))
  }

  findAllRecipes(searchText) {
    if (this.findRecipeByName(searchText) && this.findRecipeByTag(searchText) && this.findRecipeByIngredient(searchText)) {
      return this.findRecipeByName(searchText).concat(this.findRecipeByTag(searchText), this.findRecipeByIngredient(searchText));
    } else if (this.findRecipeByName(searchText) && this.findRecipeByTag(searchText)) {
      return this.findRecipeByName(searchText).concat(this.findRecipeByTag(searchText));
    } else if (this.findRecipeByTag(searchText) && this.findRecipeByIngredient(searchText)) {
      return this.findRecipeByTag(searchText).concat(this.findRecipeByIngredient(searchText));
    } else if (this.findRecipeByName(searchText) && this.findRecipeByIngredient(searchText)) {
      return this.findRecipeByName(searchText).concat(this.findRecipeByIngredient(searchText));
    }
  }

  checkForDuplicates(filteredRecipes) {
    return filteredRecipes.filter((recipe, index) => filteredRecipes.indexOf(recipe) === index)
  }

  capitalize(searchText) {
    return searchText.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}

export default Cookbook;