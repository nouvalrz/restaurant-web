/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/local/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Set restaurant as favorite', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the add to favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="add to favorite"]')
    ).toBeTruthy();
  });

  it('should not show the remove favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="remove from favorite"]')
    ).toBeFalsy();
  });

  it('should be able to add restaurant to favorite list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="add to favorite"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getRestaurant(1)).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should not add restaurant to favorite list again when it's already favorited", async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document
      .querySelector('#favorite-button')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add restaurant to favorite list when the restaurant has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

    document
      .querySelector('#favorite-button')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
