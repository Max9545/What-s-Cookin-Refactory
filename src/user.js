class User {
    constructor(id, name, pantry) {
        this.id = id;
        this.name = name;
        this.pantry = pantry;
        this.favoriteRecipes = [];

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

        let pantryNameList = []
        this.pantry.forEach(pantryItem => pantryNameList.push(pantryItem.id))
        if (ingredientsToFind.every(ingredient => pantryNameList.includes(ingredient.id))) {
            return 'You have the ingredients!'
        }
        // ingredientsToFind.forEach(ingredient => {
        //     if (!pantryNameList.includes(ingredient.id)) {
        //         //reduce
        //     }
        // })
        console.log(pantryNameList);
        //in: array
        //out: string of suxcces or object of things needed + price
        // for each ingredient to find see if it is included in the pantry
        // if something isnt in pantry then reduce a object of whatt is needed 
        //if suucces return string
        // else {
        //     ingredientsToFind.reduce((acc, ingredient) => {
        //         if (!ingredientsToFind.every(ingredient => pantryNameList.includes(ingredient.id))) {
        //             acc[ingredient.name] = ingredient.estimatedCostInCents
        //             return acc
        //         }
        //         return acc
        //     })
        // }
    }
}


export default User;