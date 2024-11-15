class LoadingSpinnerController {
  constructor(loadingContainer) {
    this._loadingContainer = loadingContainer;
  }

  show() {
    this._loadingContainer.style.display = "flex";
  }

  hide() {
    this._loadingContainer.style.display = "none";
  }
}

export default LoadingSpinnerController;
