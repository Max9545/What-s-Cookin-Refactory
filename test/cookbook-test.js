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
      expect(cookbook.findRecipe('Sesame Cookies')[0]).to.deep.equal(recipeData[7]);
    });

    it('Should be able to filter through its array by tag', () => {
      expect(cookbook.findRecipe('starter').length).to.equal(9);
    })

    it('Should have no recipies with the same name', () => {
      console.log(cookbook.findRecipe('Gluten Free Whole Grain ]ad'))
      expect(cookbook.findRecipe('Gluten Free Whole Grain Bread').length).to.equal(1);
    })
  });
})