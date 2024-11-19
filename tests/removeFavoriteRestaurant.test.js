/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/local/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Remove restaurant from favorite', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should show remove favorite restaurant button when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="remove from favorite"]')
    ).toBeTruthy();
  });

  it('should not show add favorite restaurant button when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="add to favorite"]')
    ).toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="remove from favorite"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error when user click remove favorite button if the restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document
      .querySelector('[aria-label="remove from favorite"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
