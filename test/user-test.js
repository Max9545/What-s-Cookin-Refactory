import { expect } from 'chai';

import User from '../src/user.js';
import recipeData from '../src/data/recipes.js'

let user1

describe('User', () => {
    beforeEach(() => {
        user1 = new User(1, 'Boba', [{
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
            },
            {
                "id": 19206,
                "name": "instant vanilla pudding",
                "estimatedCostInCents": 660
            },
            {
                "id": 19334,
                "name": "brown sugar",
                "estimatedCostInCents": 559
            },
            {
                "id": 2047,
                "name": "salt",
                "estimatedCostInCents": 280
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

    it.only('Should be able to remove recipes from favoriteRecipes', () => {
        user1.addToFavorites(recipeData[0])
        console.log(user1);
        user1.removeFromFavorites(recipeData[0]);
        console.log(user1);
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

    it('Should be able to check ingredients in User/s pantry for a given recipe', () => {

        let recipeIngredients = [{
                'ingredient': 1077,
                'amount': 1
            },
            {
                'ingredient': 14412,
                'amount': 1
            }, {
                'ingredient': 1009054,
                'amount': 3
            }
        ]

        expect(user1.checkPantry(recipeIngredients)).to.eql('You have the ingredients!');
    });

    it('Should inform User if they lack required ingredients for a given recipe', () => {
        expect(user1.checkPantry(recipeIngredients)).to.eql(missingIngredientsWithPrice);
    });
});