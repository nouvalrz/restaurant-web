const createFavoriteButton = () => `
  <button aria-label="add to favorite" id="favorite-button" class="favorite-button">
     <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="remove from favorite" id="favorite-button" class="favorite-button">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createFavoriteButton, createFavoritedButtonTemplate };
