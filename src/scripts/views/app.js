import NavigationController from "./controllers/navigation-controller";
import UrlParser from "../utils/url-parser";
import routes from "../routes/routes";

class App {
  constructor({
    navigationDrawer,
    navigationDrawerButtton,
    navigationDrawerButttonIcon,
    content,
  }) {
    this._navigationDrawer = navigationDrawer;
    this._navigationDrawerButton = navigationDrawerButtton;
    this._navigationDrawerButtonIcon = navigationDrawerButttonIcon;
    this._content = content;

    this._initAppShell();
  }

  _initAppShell() {
    new NavigationController({
      navigationDrawer: this._navigationDrawer,
      navigationDrawerButton: this._navigationDrawerButton,
      navigationDrawerButtonIcon: this._navigationDrawerButtonIcon,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();

    await page.afterRender();
    const resetFocus = document.querySelector("#reset-focus");
    resetFocus.focus();
    resetFocus.blur();

    const skipLink = document.querySelector(".skip-content");
    const mainContent = document.querySelector("#maincontent");
    skipLink.addEventListener("click", (event) => {
      event.preventDefault();
      mainContent.focus();
    });
  }
}

export default App;
