const createReviewForm = () => `
    <form id="review-form">
      <div class="restaurant-detail__review-form">
        <input type="text" placeholder="Your Name" class="review-form__name" id="review-name" required> 
        <textarea type="text" placeholder="Description" class="review-form__desc" id="review-desc" rows="4" required></textarea>
        <button type="submit" id="review-submit", class="review-form__submit">Add Review</button>
        </div>
    </form>
`;

export { createReviewForm };
