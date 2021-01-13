import {
  expect
} from 'chai';


import recipeData from './data/recipes';
import ingredientsData from './data/ingredients'
import Cookbook from '../src/cookbook';


describe.only('Cookbook', () => {
  let cookbook;

  beforeEach(() => {
    cookbook = new Cookbook(recipeData);
  });

  it('Should have a populated array of recipes', () => {
    expect(cookbook.recipes).to.be.an('array');
    expect(cookbook.recipes).to.deep.equal(recipeData);
  });

  describe('findRecipe', () => {

    it('Should be able to filter through its array by name', () => {
      expect(cookbook.findRecipe('Sesame Cookies', ingredientsData)).to.deep.equal(recipeData[7]);
      expect(cookbook.findRecipe('sesame cookies', ingredientsData)).to.deep.equal(recipeData[7]);
    });

    it('Should be able to filter through its array by name and get multiple possiblities', () => {
      expect(cookbook.findRecipe('cake', ingredientsData).length).to.equal(2);
      expect(cookbook.findRecipe('cake', ingredientsData)).to.deep.equal([recipeData[22], recipeData[27]]);
    });

    it('Should be able to filter through its array by tag', () => {
      expect(cookbook.findRecipe('starter', ingredientsData).length).to.equal(9);
      expect(cookbook.findRecipe('Starter', ingredientsData).length).to.equal(9);
    })

    it('Should be able to filter through its array by ingredients', () => {
      expect(cookbook.findRecipe('YOlk', ingredientsData).length).to.equal(2);
      expect(cookbook.findRecipe('yolk', ingredientsData).length).to.equal(2);
    });
  });
})