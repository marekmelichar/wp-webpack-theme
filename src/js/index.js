import "../scss/base.scss";
import Planet from "../img/kepler.jpg";

const root = document.querySelectorAll("#root");

root.forEach((item) => {
  item.style.backgroundColor = "green";
  // item.style.backgroundImage = src(Planet);
});

const imagePlanet = new Image();
imagePlanet.src = Planet;
document.body.insertAdjacentElement("afterbegin", imagePlanet);
