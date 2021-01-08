import {
  expect
} from 'chai';


import recipeData from '../src/data/recipes';
import Cookbook from '../src/cookbook';


describe('Cookbook', () => {
  let cookbook;

  beforeEach(() => {
    cookbook = new Cookbook(recipeData);
  });

  it('Should have a populated array of recipes', () => {
    expect(cookbook.recipes).to.be.an('array');
  });

  describe('findRecipe', () => {
    it('Should be able to filter through its array by ingredients', () => {
      expect(cookbook.findRecipe('yolk').length).to.equal(2);
    });

    it('Should be able to filter through its array by name', () => {
      expect(cookbook.findRecipe('Sesame Cookies').length).to.equal(1);
    });
  });
})