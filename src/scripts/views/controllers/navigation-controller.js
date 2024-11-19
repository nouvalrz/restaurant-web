class NavigationController {
  constructor({
    navigationDrawer,
    navigationDrawerButton,
    navigationDrawerButtonIcon,
    content,
  }) {
    this._navigationDrawer = navigationDrawer;
    this._navigationDrawerButton = navigationDrawerButton;
    this._navigationDrawerButtonIcon = navigationDrawerButtonIcon;
    this._content = content;

    this._initHandler();
  }

  _initHandler() {
    this._navigationDrawerButtonHandler();
    this._contentHandler();
    this._navigationDrawerResizeHandler();
  }

  _navigationDrawerButtonHandler() {
    this._navigationDrawerButton.addEventListener("click", (event) => {
      this._toggleNavigationDrawer(event);
      this._toggleNavigationDrawerButtonIcon();
    });
  }

  _contentHandler() {
    this._content.addEventListener("click", (event) => {
      this._closeNavigationDrawer(event);
      this._toggleNavigationDrawerButtonIcon();
    });
  }

  _toggleNavigationDrawer(event) {
    event.stopPropagation();
    this._navigationDrawer.classList.toggle("open");
  }

  _closeNavigationDrawer(event) {
    event.stopPropagation();
    this._navigationDrawer.classList.remove("open");
  }

  _toggleNavigationDrawerButtonIcon() {
    if (this._navigationDrawer.classList.contains("open")) {
      this._navigationDrawerButtonIcon.className = "";
      this._navigationDrawerButtonIcon.classList.add("fa-solid", "fa-xmark");
    } else {
      this._navigationDrawerButtonIcon.className = "";
      this._navigationDrawerButtonIcon.classList.add("fa-solid", "fa-bars");
    }
  }

  _navigationDrawerResizeHandler() {
    window.addEventListener("resize", (event) => {
      if (window.innerWidth > 768) {
        this._closeNavigationDrawer(event);
        this._toggleNavigationDrawerButtonIcon();
      }
    });
  }
}

export default NavigationController;
