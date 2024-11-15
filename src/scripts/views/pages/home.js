import RestaurantsApi from "../../data/remote/restaurants-api";
import { createHero } from "../templates/hero";
import { createLoadingSpinner } from "../templates/loading-spinner";
import { createRestaurantCard } from "../templates/restaurant-card";
import LoadingSpinnerController from "../controllers/loading-spinner-controller";
class Home {
  static async render() {
    return `
      ${createHero()}
      <section class="restaurant-list">
        <h2 tabindex="0" class="restaurant-list__title" id="maincontent">Explore Restaurant</h2>
        ${createLoadingSpinner()}
        <div class="restaurant-list__contents"></div>
      </section>
    `;
  }

  static async afterRender() {
    const loadingSpinner = new LoadingSpinnerController(
      document.querySelector(".loading-container")
    );

    loadingSpinner.show();

    const restaurants = await this.getAllRestaurants();

    loadingSpinner.hide();

    const restaurantListContents = document.querySelector(
      ".restaurant-list__contents"
    );
    restaurants.forEach((restaurant) => {
      restaurantListContents.innerHTML += createRestaurantCard(restaurant);
    });
  }

  static async getAllRestaurants() {
    const response = await RestaurantsApi.getAll();
    return response.data.restaurants;
  }
}

export default Home;
