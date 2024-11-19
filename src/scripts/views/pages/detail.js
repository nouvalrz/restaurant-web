import RestaurantsApi from '../../data/remote/restaurants-api';
import UrlParser from '../../utils/url-parser';
import FavoriteButtonController from '../controllers/favorite-button-controller';
import LoadingSpinnerController from '../controllers/loading-spinner-controller';
import ReviewFormController from '../controllers/review-form-controller';
import { createLoadingSpinner } from '../templates/loading-spinner';
import {
  createRestaurantDetail,
  createRestaurantHighlight,
  createRestaurantReviews,
} from '../templates/restaurant-information';

class Detail {
  static async render() {
    return `
      ${createLoadingSpinner()}
      <section class="restaurant-highlight">
      </section>
      <section class="restaurant-detail">
      </section>
      <div id="favorite-button-container"></div>
    `;
  }

  static async afterRender() {
    const loadingSpinner = new LoadingSpinnerController(
      document.querySelector('.loading-container')
    );

    loadingSpinner.show();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await this.getDetailRestaurant(url.id);

    loadingSpinner.hide();

    this.renderRestaurantHighlight(restaurant);
    this.renderRestaurantDetail(restaurant);
    this.renderRestaurantReviews(restaurant.customerReviews);

    FavoriteButtonController.init({
      favoriteButtonContainer: document.querySelector(
        '#favorite-button-container'
      ),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

    ReviewFormController.init({
      reviewForm: document.querySelector('#review-form'),
      restaurantId: restaurant.id,
    });

    document.addEventListener('update-restaurant-reviews', (event) => {
      console.log('asjasjjasjasjasjjsasa');
      this.renderRestaurantReviews(event.detail.customerReviews);
    });
  }

  static async getDetailRestaurant(id) {
    const response = await RestaurantsApi.getDetail(id);
    return response.data.restaurant;
  }

  static renderRestaurantDetail(restaurant) {
    const restaurantDetail = document.querySelector('.restaurant-detail');
    restaurantDetail.innerHTML = createRestaurantDetail(restaurant);
  }

  static renderRestaurantHighlight(restaurant) {
    const restaurantHighlight = document.querySelector('.restaurant-highlight');
    restaurantHighlight.innerHTML = createRestaurantHighlight(restaurant);
  }

  static renderRestaurantReviews(reviews) {
    const restaurantReviews = document.querySelector(
      '.restaurant-detail__review-wrapper'
    );
    restaurantReviews.innerHTML = createRestaurantReviews(reviews);
  }
}

export default Detail;
