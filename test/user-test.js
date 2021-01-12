import { expect } from 'chai';

import User from '../src/user.js';
import recipeData from '../src/data/recipes.js'

let user1

describe('User', () => {
    beforeEach(() => {
        user1 = new User(1, 'Boba', [{
                "name": "all purpose flour",
                "id": 20081,
                "quantity": {
                    "amount": 1.5,
                    "unit": "c"
                }
            },
            {
                "name": "baking soda",
                "id": 18372,
                "quantity": {
                    "amount": 0.5,
                    "unit": "tsp"
                }
            },
            {
                "name": "egg",
                "id": 1123,
                "quantity": {
                    "amount": 1,
                    "unit": "large"
                }
            },
            {
                "name": "granulated sugar",
                "id": 19335,
                "quantity": {
                    "amount": 0.5,
                    "unit": "c"
                }
            },
            {
                "name": "instant vanilla pudding mix",
                "id": 19206,
                "quantity": {
                    "amount": 3,
                    "unit": "Tbsp"
                }
            },
            {
                "name": "light brown sugar",
                "id": 19334,
                "quantity": {
                    "amount": 0.5,
                    "unit": "c"
                }
            },
            {
                "name": "salt",
                "id": 2047,
                "quantity": {
                    "amount": 0.5,
                    "unit": "tsp"
                }
            },
            {
                "name": "sea salt",
                "id": 1012047,
                "quantity": {
                    "amount": 24,
                    "unit": "servings"
                }
            },
            {
                "name": "semisweet chocolate chips",
                "id": 10019903,
                "quantity": {
                    "amount": 2,
                    "unit": "c"
                }
            },
            {
                "name": "unsalted butter",
                "id": 1145,
                "quantity": {
                    "amount": 0.5,
                    "unit": "c"
                }
            },
            {
                "name": "vanilla extract",
                "id": 2050,
                "quantity": {
                    "amount": 0.5,
                    "unit": "tsp"
                }
            }
        ]);
    });


    it('Should have a property of favoriteRecipes with a default value', () => {
        expect(user1.favoriteRecipes).to.eql([]);
    });

    it('Should be able to add recipes to favoriteRecipes', () => {

        user1.addToFavorites(recipeData[0])

        expect(user1.favoriteRecipes.includes(recipeData[0])).to.eql(true);
    });

    it('Should be able to remove recipes from favoriteRecipes', () => {

        user1.addToFavorites(recipeData[0])

        user1.removeFromFavorites(recipeData[0]);

        expect(user1.favoriteRecipes).to.eql([]);
    });

    it('Should be able to filter through favoriteRecipes by tag', () => {
        user1.addToFavorites(recipeData[0]);

        user1.addToFavorites(recipeData[1]);

        expect(user1.filterFavorites('antipasti')).to.eql([recipeData[0]]);
    });

    it('Should be able to search favoriteRecipes by name or ingredient', () => {

        user1.addToFavorites(recipeData[0]);

        user1.addToFavorites(recipeData[1]);

        expect(user1.findFavorites('egg')).to.eql([recipeData[0]]);
    });


    it('Should have a property of favoriteRecipes with a default value', () => {
        expect(user1.recipesToCook).to.eql([]);
    });

    it('Should be able to add recipes to recipesToCook', () => {

        user1.addToRecipesToCook(recipeData[0])

        expect(user1.recipesToCook.includes(recipeData[0])).to.eql(true);
    });

    it('Should be able to remove recipes from recipesToCook', () => {

        user1.addToRecipesToCook(recipeData[0])

        user1.removeFromRecipesToCook(recipeData[0]);

        expect(user1.recipesToCook).to.eql([]);
    });

    it.only('Should be able to filter through recipesToCook by tag', () => {

        user1.addToRecipesToCook(recipeData[0]);

        user1.addToRecipesToCook(recipeData[1]);

        expect(user1.filterRecipeToCooks('antipasti')).to.eql([recipeData[0]]);
    });

    it('Should be able to search recipesToCook by name or ingredient', () => {

        user1.addToRecipesToCook(recipeData[0]);

        user1.addToRecipesToCook(recipeData[1]);

        expect(user1.findRecipesToCook('egg')).to.eql([recipeData[0]]);
    });

    it('Should be able to check ingredients in User/s pantry for a given recipe', () => {

        let recipeIngredients = recipeData[0].ingredients

        expect(user1.checkPantry(recipeIngredients)).to.eql('You have the ingredients!');
    });

    it('Should inform User if they lack required ingredients for a given recipe', () => {

        let user2 = new User(1, 'Boba', [{
                "id": 20081,
                "name": "wheat flour",
                "estimatedCostInCents": 142
            },
            {
                "id": 18372,
                "name": "bicarbonate of soda",
                "estimatedCostInCents": 582
            },
            {
                "id": 1123,
                "name": "eggs",
                "estimatedCostInCents": 472
            },
            {
                "id": 19335,
                "name": "sucrose",
                "estimatedCostInCents": 902
            }
        ]);

        let recipeIngredients = recipeData[0].ingredients

        let missingIngredientsWithAmount = {
            'all purpose flour': 1.5,
            'baking soda': 0.5,
            egg: 1,
            'granulated sugar': 0.5,
            'instant vanilla pudding mix': 3,
            'light brown sugar': 0.5,
            salt: 0.5,
            'sea salt': 24,
            'semisweet chocolate chips': 2,
            'unsalted butter': 0.5,
            'vanilla extract': 0.5
        }

        expect(user2.checkPantry(recipeIngredients)).to.eql(missingIngredientsWithAmount);
    });
});