import RestaurantsApi from '../../data/remote/restaurants-api';

const ReviewFormController = {
  init({ reviewForm, restaurantId }) {
    this._reviewForm = reviewForm;
    this._restaurantId = restaurantId;
    this._initHandler();
  },

  _initHandler() {
    this._submitHandler();
  },

  _submitHandler() {
    this._reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const { name, description } = this._getFormData();

      if (this._isFormNotValid(name, description)) {
        alert('Please fill out the review form correctly!');
        return;
      }

      this._disableButton();
      try {
        const response = await RestaurantsApi.postReview({
          id: this._restaurantId,
          name: name,
          description: description,
        });

        document.dispatchEvent(
          new CustomEvent('update-restaurant-reviews', {
            detail: {
              customerReviews: response.data.customerReviews,
            },
          })
        );
      } catch (e) {
        console.log(e);
      }
      this._clearForm();
      this._enableButton();
    });
  },

  _getFormData() {
    const name = this._reviewForm.querySelector('#review-name').value;
    const description = this._reviewForm.querySelector('#review-desc').value;
    return { name, description };
  },

  _clearForm() {
    this._reviewForm.reset();
  },

  _isFormNotValid(...args) {
    return Boolean(args.filter((item) => item === '').length);
  },

  _disableButton() {
    this._reviewForm
      .querySelector('#review-submit')
      .setAttribute('disabled', '');
  },

  _enableButton() {
    this._reviewForm
      .querySelector('#review-submit')
      .removeAttribute('disabled');
  },
};

export default ReviewFormController;
