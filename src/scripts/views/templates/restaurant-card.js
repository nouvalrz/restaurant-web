const createRestaurantCard = (restaurant) => `
  <article class="restaurant-card">
    <div class="restaurant-card__city-badge">
      <p tabindex="0">Kota ${restaurant.city}</p>
    </div>
    <img
      src="${createImageUrl(restaurant.pictureId)}"
      alt="${restaurant.name} Photo"
      class="lazyload restaurant-card__image"
      tabindex="0"
    />
    <div class="restaurant-card__header">
      <div>
        <p class="restaurant-card__rating" tabindex="0" >
          <i class="fa-solid fa-star"></i>
          ${restaurant.rating}
        </p>
        <h3 class="restaurant-card__title" tabindex="0">${restaurant.name}</h3>
      </div>
      <a href="#/detail/${
        restaurant.id
      }" class="restaurant-card__detail-button" tabindex="0" aria-label="Open restaurant detail">
        <i class="fa-solid fa-circle-chevron-right"></i>
      </a>
    </div>
    <div class="restaurant-card__desc">
      <p tabindex="0">
      ${restaurant.description}
      </p>
    </div>
  </article>
`;

const createImageUrl = (id) =>
  `https://restaurant-api.dicoding.dev/images/medium/${id}`;

export { createRestaurantCard };
