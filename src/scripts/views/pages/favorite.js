import FavoriteRestaurantIdb from "../../data/local/favorite-restaurant-idb";
import { createFavoriteHero } from "../templates/favorite-hero";
import { createRestaurantCard } from "../templates/restaurant-card";
class Favorite {
  static async render() {
    return `
      ${createFavoriteHero()}
      <section class="restaurant-list">
        <div class="restaurant-list__contents"></div>
      </section>
    `;
  }

  static async afterRender() {
    const restaurants = await this.getAllRestaurants();
    const restaurantListContents = document.querySelector(
      ".restaurant-list__contents"
    );
    restaurants.forEach((restaurant) => {
      restaurantListContents.innerHTML += createRestaurantCard(restaurant);
    });
  }

  static async getAllRestaurants() {
    const response = await FavoriteRestaurantIdb.getAllRestaurants();
    return response;
  }
}

export default Favorite;
