import { createReviewForm } from './review-form';

const createRestaurantHighlight = (restaurant) => `
  <div class="restaurant-highlight__wrapper">
    <div class="restaurant-highlight__info">
      <h1 tabindex="0" id="maincontent">${restaurant.name}</h1>
      <div class="restaurant-highlight__minicard">
        <i class="fa-solid fa-location-dot"></i>
        <div>
          <h2 tabindex="0">${restaurant.city}</h2>
          <p tabindex="0">${restaurant.address}</p>
        </div>
      </div>
      <div class="restaurant-highlight__minicard">
        <i class="fa-solid fa-layer-group"></i>
        <div>
          <h2 tabindex="0">Kategori</h2>
          <p>${restaurant.categories.map((item) => item.name).join(', ')}</p>
        </div>
      </div>
      <div class="restaurant-highlight__minicard">
        <i class="fa-solid fa-star"></i>
        <div>
          <h2 tabindex="0">Rating</h2>
          <p tabindex="0">${restaurant.rating}</p>
        </div>
      </div>
    </div>
    <img class="restaurant-highlight__image" alt="${
      restaurant.name
    } Photo" src="https://restaurant-api.dicoding.dev/images/large/${
  restaurant.pictureId
}">
  </div>
`;

const createRestaurantDetail = (restaurant) => `
  <div class="restaurant-detail__card">
    <div class="restaurant-detail__first-part">
      <div class="restaurant-detail__description">
        <h3 tabindex="0">Detail</h3>
        <p tabindex="0">${restaurant.description}</p>
      </div>
      <div class="restaurant-detail__list">
        <h3 tabindex="0">Foods</h3>
        <ul tabindex="0">
          ${restaurant.menus.foods
            .map((item) => `<li tabindex="0">${item.name}</li>`)
            .join('')}
        </ul>
      </div>

      <div class="restaurant-detail__list">
        <h3 tabindex="0">Drinks</h3>
        <ul tabindex="0">
          ${restaurant.menus.drinks
            .map((item) => `<li tabindex="0">${item.name}</li>`)
            .join('')}
        </ul>
      </div>
    </div>
    <div class="restaurant-detail__second-part">
      <div class="restaurant-detail__reviews">
        <h3 tabindex="0">Review</h3>
        ${createReviewForm()}
        
        <h3 tabindex="0">Customer Reviews</h3>
        <div class="restaurant-detail__review-wrapper">

        </div>
      </div>
    </div>
  </div>
`;

const createRestaurantReviews = (reviews) => `
          ${reviews
            .reverse()
            .map((item) => {
              return `
                <div class="restaurant-detail__review-item">
                  <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(
                    item.name
                  )}&background=f6f6fe&color=4845f5" alt="${
                item.name
              } Profile" class="restaurant-detail-review-user">
                  <div class=""restaurant-detail__review-detail">
                    <h4 tabindex="0">${item.name}</h4>
                    <p tabindex="0">${item.review}</p>
                    <p tabindex="0" class="restaurant-detail__review-detail-date">${
                      item.date
                    }</p>
                  </div>
                </div>
              `;
            })
            .join('')}
`;

export {
  createRestaurantHighlight,
  createRestaurantDetail,
  createRestaurantReviews,
};
