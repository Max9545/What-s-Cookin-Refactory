import {
  expect
} from 'chai';

import Recipe from '../src/recipe.js';
import recipeData from './data/recipes.js';
import ingredientsData from './data/ingredients.js';

describe('Recipe', () => {
  let recipe;
  beforeEach(() => {
    recipe = new Recipe(recipeData[47], ingredientsData);
  });

  describe('Recipe Data', () => {

    it('Should hold its own ingredient data', () => {
      expect(recipe.ingredients).to.equal(recipeData[47].ingredients);
    })

    it('Should hold its own instruction data', () => {
      expect(recipe.instructions).to.equal(recipeData[47].instructions);
    })
  })

  it('Should be able to calculate the cost of its ingredients', () => {
    expect(recipe.calculateCost()).to.equal(4166);
  });


});
