import FavoriteButtonController from '../../src/scripts/views/controllers/favorite-button-controller';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonController.init({
    favoriteButtonContainer: document.querySelector(
      '#favorite-button-container'
    ),
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
