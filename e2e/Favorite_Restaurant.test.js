/* eslint-disable no-undef */
const assert = require('assert');

Feature('Set restaurant as favorite');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('shows empty favorited restaurants', ({ I }) => {
  I.see('There are no restaurants saved', '.empty-message');
});

Scenario('add restaurant to favorite', async ({ I }) => {
  I.see('There are no restaurants saved', '.empty-message');

  I.amOnPage('/');

  const firstRestaurant = locate('.restaurant-card__title');
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.seeElement('.restaurant-card .restaurant-card__header a');
  I.click(locate('.restaurant-card .restaurant-card__header a').first());

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-card');

  const favoritedRestaurantName = await I.grabTextFrom(
    '.restaurant-card__title'
  );
  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});
