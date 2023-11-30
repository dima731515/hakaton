const buttons = Array.from(document.querySelectorAll(".button"));
const buttonArrow = Array.from(document.querySelectorAll(".button__arrow"));
const buttonArrowYellow = Array.from(document.querySelectorAll(".button__arrow_y"));

const buttonContent = Array.from(document.querySelectorAll(".button__content"));
const footerLink = Array.from(document.querySelectorAll(".footer-link"));
const imageContainer = Array.from(document.querySelectorAll(".card__image__container"));
const cardLink = Array.from(document.querySelectorAll(".card__link"));

const cardsContainer = document.querySelector(".cards__container");
const merchCards = document.querySelector(".merch__cards");

buttons.forEach((button, index) => {
  button.addEventListener("mouseenter", () => {
    buttonArrow[index].classList.add("invisible");
    buttonArrowYellow[index].classList.remove("invisible");
  });
  button.addEventListener("mouseleave", () => {
    buttonArrow[index].classList.remove("invisible");
    buttonArrowYellow[index].classList.add("invisible");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.scale = "0.99";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseup", () => {
    button.style.scale = "1";
  });
});

footerLink.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    let hover = document.createElement("div");
    hover.classList.add("link__hover");
    link.append(hover);
  });
  link.addEventListener("mouseleave", () => {
    document.querySelector(".link__hover").remove();
  });
});

let scale = null;
imageContainer.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    container.firstChild.nextSibling.style.scale = `${scale}`;
    container.firstChild.nextSibling.style.opacity = "0.75";

    let hover = document.createElement("a");
    hover.classList.add("card__hover");
    hover.href = "https://www.vk.com/mastrildar";
    hover.target = "_blank";
    container.append(hover);
    hover.innerHTML = `<p class="hover__title">СМОТРЕТЬ</p>
    <img class="hover-eye" src="../images/eye.svg" alt="" />`;
  });

  container.addEventListener("mouseleave", () => {
    container.firstChild.nextSibling.style.scale = "";
    container.firstChild.nextSibling.style.opacity = "1";

    document.querySelector(".card__hover").remove();
  });
});

cardLink.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.firstChild.nextSibling.src = "../images/merch-arrow-square_hover.svg";
  });
  link.addEventListener("mouseleave", () => {
    link.firstChild.nextSibling.src = "../images/merch-arrow-square.svg";
  });
});

cardsContainer.addEventListener("mousedown", sliderStart);

let baseLeft;
let value = null;
let x1 = null;

windowSize();

document.addEventListener("click", () => {
  console.log(window.outerWidth);
});

function windowSize() {
  if (window.outerWidth > 1600) {
    baseLeft = 48;
    value = baseLeft;
    maxLeft = -810;
    maxScale = 1.0519;
    scale = maxScale;

    value = baseLeft;
  } else if ((window.outerWidth > 800) & (window.outerWidth < 1600)) {
    baseLeft = 85;
    value = baseLeft;
    maxLeft = -560;
    maxScale = 1.0419;
    scale = maxScale;
  }
  console.log(window.outerWidth);
  console.log(value);
}

function sliderStart(e) {
  merchCards.style.left = value + "px";
  let left = merchCards.style.left;
  left = +left.split("px")[0];

  x1 = e.clientX;

  cardsContainer.addEventListener("mousemove", move);
  document.addEventListener("mouseup", () => {
    cardsContainer.removeEventListener("mousemove", move);
  });

  function move(e) {
    let deltaX = x1 - e.clientX;
    merchCards.style.left = left + -deltaX + "px";
    value = left + -deltaX;

    if (value < maxLeft) {
      cardsContainer.removeEventListener("mousemove", move);
      merchCards.style.left = `${maxLeft}px`;
      value = maxLeft;
    }

    if (value > baseLeft) {
      merchCards.style.left = `${baseLeft}px`;
      value = baseLeft;
    }
  }
}

//console.log(merchCards.offsetLeft);
