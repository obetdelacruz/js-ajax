import getRandomNum from "./src/utilsFunction/getRandomNum";
import fetchImages from "./fetchImages";
import "./style.css";

fetchImages()
  .then((rawData) => {
    const img = document.createElement("img");
    img.classList.add("photo-url");
    img.src = rawData.photos[getRandomNum(0, 8)].src.large2x;
    document.body.appendChild(img);
  })
  .catch((error) => console.log(error));
