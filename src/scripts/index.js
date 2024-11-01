import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import Home from './pages/home';

const pages = {
  "/": Home
}

const currentRoute = window.location.pathname;

window.addEventListener("DOMContentLoaded", () => {
  if(pages[currentRoute]){
    pages[currentRoute].init();
  }else{
    window.location.href = "/";
  }
})
