let restaurants = []
let lastFocusedElement;

const Home = {
  async init() {
    await this._initData()
    this._initHandler()
  },

  async _initData() {
    const response = await fetch("/data/DATA.json")
    const parsedResponse = await response.json()

    restaurants = parsedResponse.restaurants

    this._buildRestaurantListUI(restaurants)
  },

  _buildRestaurantListUI(restaurants) {
    const restaurantList = document.querySelector(".restaurant-list__contents")

    let ui = ""

    restaurants.forEach((restaurant) => {
      ui += `
         <article class="restaurant-card">
            <div class="restaurant-card__city-badge">
              <p tabindex="0">Kota ${restaurant.city}</p>
            </div>
            <img
              src="${restaurant.pictureId}"
              alt="${restaurant.name} Photo"
              class="restaurant-card__image"
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
              <button class="restaurant-card__map-button" tabindex="0" aria-label="Open location map">
                <i class="fa-solid fa-map"></i>
              </button>
            </div>
            <div class="restaurant-card__desc">
              <p tabindex="0">
              ${restaurant.description}
              </p>
            </div>
          </article>
      `
    })

    restaurantList.innerHTML = ui
  },

  _initHandler() {
    this._drawerButtonHandler()
    this._mainElementHandler()
    this._navResizeHandler()
    this._mapButtonHandler()
    this._closeMapButtonHandler()
  },

  _mapButtonHandler() {
    const mapButtons = document.querySelectorAll(".restaurant-card__map-button");

    mapButtons.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        event.stopPropagation();
        const mapFrame = document.querySelector("#map-frame");
        mapFrame.setAttribute("src", restaurants[index].map);

        const modalMapWrapper = document.querySelector(".modal-map__wrapper");
        modalMapWrapper.classList.add("open");

        const modalMapCard = document.querySelector(".modal-map-card");

        lastFocusedElement = document.activeElement;


        setTimeout(() => {
          modalMapCard.classList.add("open");
          this._setTabindexOutsideModal(-1);
          modalMapCard.querySelector("button").focus();
        }, 1);
      });
    });
  },

  _closeMapButtonHandler() {
    const closeButton = document.querySelector(".modal-map-card__header button");

    closeButton.addEventListener("click", (event) => {
      event.stopPropagation();

      const modalMapCard = document.querySelector(".modal-map-card");
      modalMapCard.classList.remove("open");

      const modalMapWrapper = document.querySelector(".modal-map__wrapper");

      setTimeout(() => {
        modalMapWrapper.classList.remove("open");
        this._setTabindexOutsideModal(0); 

        if (lastFocusedElement) {
          lastFocusedElement.focus();
        }
      }, 300);
    });
  },
  _setTabindexOutsideModal(value) { 
    const outsideElements = document.querySelectorAll("header, main, footer");
    outsideElements.forEach(element => {
      element.setAttribute("tabindex", value);
    });
  },


  _drawerButtonHandler() {
    const drawerButton = document.querySelector(".header__drawer-button")
    const headerNav = document.querySelector(".header__nav")
    drawerButton.addEventListener("click", (event) => {
      event.stopPropagation()
      headerNav.classList.toggle("open")

      this._toggleDrawerIcon()
    })
  },

  _mainElementHandler() {
    const headerNav = document.querySelector(".header__nav")
    const mainElement = document.querySelector("main")
    mainElement.addEventListener("click", (event) => {
      event.stopPropagation()
      headerNav.classList.remove("open")

      this._toggleDrawerIcon()

      const modalMapCard = document.querySelector(".modal-map-card")
      modalMapCard.classList.remove("open")

      const modalMapWrapper = document.querySelector(".modal-map__wrapper")
      setTimeout(() => {
        modalMapWrapper.classList.remove("open")
      }, 300)
    })
  },

  _navResizeHandler() {
    const headerNav = document.querySelector(".header__nav")
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        headerNav.classList.remove("open")

        this._toggleDrawerIcon()
      }
    })
  },

  _toggleDrawerIcon() {
    const drawerButton = document.querySelector(".header__drawer-button")
    const headerNav = document.querySelector(".header__nav")
    const icon = drawerButton.querySelector("i")
    if (headerNav.classList.contains("open")) {
      icon.className = ""
      icon.classList.add("fa-solid", "fa-xmark")
    } else {
      icon.className = ""
      icon.classList.add("fa-solid", "fa-bars")
    }
  }
}

export default Home
