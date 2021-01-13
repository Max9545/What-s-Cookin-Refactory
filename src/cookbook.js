class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  //function that adds a the property of name forEach ingredient
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




  //change data => recipes
  findRecipe(searchText, data) {
    if (this.findAllRecipes(searchText, data)) {
      return this.findAllRecipes(searchText, data);
    } else if (this.findRecipeByName(searchText)) {
      return this.findRecipeByName(searchText)
    } else if (this.findRecipeByTag(searchText)) {
      return this.findRecipeByTag(searchText);
    } else {
      return this.findRecipeByIngredient(searchText, data);
    }
    //ok, now I want to mash all of that together into one thing!
    //close
    //put this in a helper function?

    //evaluate if byName && byTag && byIngredient (do something inside of that)
    //evaluate if byName && byTag (dosomething)
    //if byName && byIngredient (do something)

    //then, evaluate if those single things are legit.
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

  findRecipeByIngredient(searchText, iData) {
    // const ingredientWithName = iData.find(ingredient => ingredient.name.includes(searchText));
    // const findMatchingRecipes = this.recipes.filter(recipe => {
    //   return recipe.ingredients.find(ingredient => {
    //     if (ingredient.id === ingredientWithName.id) {
    //       return recipe;
    //     }
    //   })
    // })
    // return findMatchingRecipes;
  }

  findAllRecipes(searchText, data) {
    // console.log('find all recipes fx')
    if (this.findRecipeByName(searchText) && this.findRecipeByTag(searchText) && this.findRecipeByIngredient(searchText, data)) {
      //add together into one array
      return this.findRecipeByName(searchText).concat(this.findRecipeByTag(searchText), this.findRecipeByIngredient(searchText, data));
    } else if (this.findRecipeByName(searchText) && this.findRecipeByTag(searchText)) {
      return this.findRecipeByName(searchText).concat(this.findRecipeByTag(searchText))
      //add together into one array
    } else if (this.findRecipeByTag(searchText) && this.findRecipeByIngredient(searchText, data)) {
      return this.findRecipeByTag(searchText).concat(this.findRecipeByIngredient(searchText, data))
      //add together into one array
    } else if (this.findRecipeByName(searchText) && this.findRecipeByIngredient(searchText, data)) {
      return this.findRecipeByName(searchText).concat(this.findRecipeByIngredient(searchText, data))
      //add together into one array
    }
  }


  capitalize(searchText) {
    return searchText.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}

export default Cookbook;