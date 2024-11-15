import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  navigationDrawer: document.querySelector(".header__nav"),
  navigationDrawerButtton: document.querySelector(".header__drawer-button"),
  navigationDrawerButttonIcon: document.querySelector(
    ".header__drawer-button i"
  ),
  content: document.querySelector("main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", async () => {
  await swRegister();
  app.renderPage();
});
