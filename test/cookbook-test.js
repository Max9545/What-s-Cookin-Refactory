import {
  expect
} from 'chai';


import recipeData from './data/recipes';
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
    it('Should be able to filter through its array by ingredients', () => {
      console.log(cookbook.findRecipe('yolk'))
      expect(cookbook.findRecipe('yolk').length).to.equal(2);
    });

    it('Should be able to filter through its array by name', () => {
      console.log(cookbook.findRecipe('Sesame Cookies'));
      expect(cookbook.findRecipe('Sesame Cookies')[0]).to.deep.equal(recipeData[7]);
    });

    it('Should be able to filter through its array by tag', () => {
      console.log(cookbook.findRecipe('starter'))
      expect(cookbook.findRecipe('starter').length).to.equal(9);
    })

    it('Should have no recipies with the same name', () => {
      console.log(cookbook.findRecipe('Loaded Chocolate Chip Pudding Cookie Cups'))
      expect(cookbook.findRecipe('Loaded Chocolate Chip Pudding Cookie Cups').length).to.equal(1);
    })
  });
})
