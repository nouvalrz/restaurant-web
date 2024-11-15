import FavoriteRestaurantIdb from "../../data/local/favorite-restaurant-idb";
import {
  createFavoriteButton,
  createFavoritedButtonTemplate,
} from "../templates/favorite-button";

const FavoriteButtonController = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const movie = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!movie;
  },

  _renderLike() {
    this._favoriteButtonContainer.innerHTML = createFavoriteButton();

    const likeButton = document.querySelector("#favorite-button");
    likeButton.addEventListener("click", async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate();

    const likeButton = document.querySelector("#favorite-button");
    likeButton.addEventListener("click", async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonController;
