import { values } from "./api";
import loadingImg from "./img/loading.gif";

let loading = false;

function toggleLoading() {
  loading = !loading;

  let content = document.querySelector(".content");
  let contentChilds = document.querySelectorAll(".content > div");

  if (loading) {
    content.style.background = `url(${loadingImg})`;
    content.style.backgroundPosition = "center";
    for (let contentChild of contentChilds) {
      contentChild.style.visibility = "hidden";
    }
  } else {
    content.style.background = "";
    for (let contentChild of contentChilds) {
      contentChild.style.visibility = "visible";
    }
  }
}

function render() {
  let iconDOM = document.querySelector("#description-icon");
  let locationDOM = document.querySelector(".heading-info .location");
  let degreesDOM = document.querySelector(".degrees");
  let descriptionDOM = document.querySelector(".description-text");
  let humidityDOM = document.querySelector(".humidity-value");
  let cloudDOM = document.querySelector(".cloud-value");
  let heatIndexDOM = document.querySelector(".heatIndex-value");
  let windDOM = document.querySelector(".wind-value");
  let extraImage = document.querySelector(".extra-img");

  locationDOM.textContent = values.location;
  degreesDOM.textContent = `${values.degreeValue}°C`;
  if (values.degreeValue == "?") {
    degreesDOM.textContent = `ERROR`;
  }
  descriptionDOM.textContent = values.description;
  iconDOM.src = values.descriptionIcon;
  humidityDOM.textContent = values.humidValue;
  cloudDOM.textContent = values.cloudValue;
  heatIndexDOM.textContent = values.heatIndexValue;
  windDOM.textContent = values.windValue;
  extraImage.style.backgroundImage = `url(${values.locationImageSource})`;

  // extra color styles
  if (values.degreeValue >= 5 && values.degreeValue <= 24) {
    locationDOM.style.textShadow = `2px 2px 2px yellow`;
    degreesDOM.style.textShadow = `2px 2px 2px yellow`;
  } else if (values.degreeValue > 24) {
    locationDOM.style.textShadow = `0px 0px 2px red`;
    degreesDOM.style.textShadow = `0px 0px 2px red`;
  } else if (values.degreeValue < 5) {
    locationDOM.style.textShadow = `0px 0px 2px blue`;
    degreesDOM.style.textShadow = `0px 0px 2px blue`;
  } else {
    locationDOM.style.textShadow = ``;
    degreesDOM.style.textShadow = ``;
  }
}

export { render, toggleLoading };
