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
    cookbook.addIngredientNames(ingredientsData);
  });

  it('Should have a populated array of recipes', () => {
    expect(cookbook.recipes).to.be.an('array');
    expect(cookbook.recipes).to.deep.equal(recipeData);
  });

  describe('findRecipe', () => {

    it('Should be able to filter through its array by name', () => {
      expect(cookbook.findRecipe('Sesame Cookies')[0]).to.deep.equal(recipeData[7]);
      expect(cookbook.findRecipe('sesame cookies')[0]).to.deep.equal(recipeData[7]);
    });

    it('Should be able to filter through its array by name and get multiple possiblities', () => {
      expect(cookbook.findRecipe('cake').length).to.equal(2);
      expect(cookbook.findRecipe('cake')).to.deep.equal([recipeData[22], recipeData[27]]);
    });

    it('Should be able to filter through its array by tag', () => {
      expect(cookbook.findRecipe('starter').length).to.equal(9);
      expect(cookbook.findRecipe('Starter').length).to.equal(9);
    })

    it('Should be able to filter through its array by ingredients', () => {
      expect(cookbook.findRecipe('YOlk').length).to.equal(2);
      expect(cookbook.findRecipe('yolk').length).to.equal(2);
    });

    it('Should be able to filter and find any number of recipes related to the search input', () => {
      expect(cookbook.findRecipe('pork').length).to.equal(3);
      expect(cookbook.findRecipe('BAr').length).to.equal(5);
    })

    it('Should have no repeats in searched recipes', () => {
      const duplications = [1, 'pig', 'pig', 2, 3, 'pig']
      const noDuplications = cookbook.checkForDuplicates(duplications);
      expect(noDuplications).to.deep.equal([1, 'pig', 2, 3]);
    })
  });
})