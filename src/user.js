class User {
    constructor(id, name, pantry) {
        this.id = id;
        this.name = name;
        this.pantry = pantry;
        this.favoriteRecipes = [];
        this.recipesToCook = [];

    }

    addToFavorites(recipe) {
        if (!this.favoriteRecipes.includes(recipe)) {
            this.favoriteRecipes.push(recipe)
        }
    }

    removeFromFavorites(recipe) {
        const i = this.favoriteRecipes.indexOf(recipe);
        this.favoriteRecipes.splice(i, 1)
    }

    filterFavorites(tag) {
        return this.favoriteRecipes.filter(recipe => {
            return recipe.tags.includes(tag);
        });
    }

    findFavorites(strgToSrch) {
        return this.favoriteRecipes.filter(recipe => {
            return recipe.name.includes(strgToSrch) ||
                recipe.ingredients.find(ingredient => {
                    return ingredient.name.includes(strgToSrch)
                });
        });
    }
    checkPantry(ingredientsToFind) {
        let result

        let pantryNameList = []
        this.pantry.forEach(pantryItem => pantryNameList.push(pantryItem.id))

        if (ingredientsToFind.every(ingredient => pantryNameList.includes(ingredient.id))) {
            result = 'You have the ingredients!'
        } else {
            result = ingredientsToFind.reduce((acc, ingredient) => {
                if (!ingredientsToFind.every(ingredient => pantryNameList.includes(ingredient.id))) {
                    acc[ingredient.name] = ingredient.quantity.amount
                }
                return acc
            }, {})
        }
        return result
    }
}


export default User;
