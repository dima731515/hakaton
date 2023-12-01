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
  } else if (window.outerWidth < 600) {
    baseLeft = 40;
    value = baseLeft;
    maxLeft = -970;
    maxScale = 1.0419;
    scale = maxScale;
  }
}

window.addEventListener("resize", changePositionElements);

function changePositionElements() {
  if (window.outerWidth < 481) {
    document.querySelector(".hero").innerHTML = `
  <div class="hero__title__container">
    <h1 class="hero__title">ПРИЯТНЫЙ ИЛЬДАР</h1>
  </div>
  <div class="description__image">
    <img class="hero-description__image" src="../images/Badge.png" alt="" />
  </div>
  <div class="hero__description">
    <p class="description__text">
      Меня зовут Ильдар, и по слухам я приятный молодой человек. Снимаю разноформатные ролики, начиная от скетчей, заканчивая рассуждениями на
      какую-либо тему.
    </p>
  </div>
  <a href="https://www.youtube.com/@pleasantildar" target="_blank" class="hero__button button">
    <div class="button__content">
      <div class="button-content__arrow__container">
        <img class="button__arrow" src="../images/button-arrow.svg" alt="" />
        <img class="button__arrow_y invisible" src="../images/button-arrow_y.svg" alt="" />
      </div>
      <p class="content__text">СМОТРЕТЬ<br />НА YOUTUBE</p>
    </div>
  </a>`;

    document.querySelectorAll(".promo__message").forEach((item) => (item.style.display = "none"));
    document.querySelector(".prediction__content").innerHTML = `
    <div class="content__description">
    <img class="content-description__image" src="../images/chat-bubble.svg" alt="" />
    <h2 class="content-description__title">Заходи в чат-бот<br />каждый день и получай печенье с предсказанием</h2>
    <p class="content-description__text">Каждый день в чат-боте приходят приятные предсказания в виде печеньки</p>
    </div>
    <div class="content__image__container">
      <img class="content-image-container__image" src="../images/prediction-image.png" alt="" />
    </div>
    <a href="" class="content-description__button button">
      <div class="button__content">
        <div class="button-content__arrow__container">
          <img class="button__arrow" src="../images/button-arrow.svg" alt="" />
          <img class="button__arrow_y invisible" src="../images/button-arrow_y.svg" alt="" />
        </div>
        <p class="content__text">ПОЛУЧИТЬ<br />ПРЕДСКАЗАНИЕ</p>
      </div>
    </a>
  `;
    document.querySelector(".footer__networks").innerHTML = `
      <div class="footer-link">
      <a href="https://www.youtube.com/@pleasantildar" target="_blank" 
      ><img class="footer-link__icon" src="../images/icons-header/v.2/Youtube.svg" alt="Youtube"
    /></a></div>
    <div class="footer-link">
    <a href="https://www.twitch.tv/ildarzhe" target="_blank" class="footer-link"
    ><img class="footer-link__icon"src="../images/icons-header/v.2/Twitch.svg" alt="Twitch"
  /></a></div>
    <div class="footer-link">
    <a href="https://www.t.me/unpleasent" target="_blank" class="footer-link">
    <img class="footer-link__icon"src="../images/icons-header/v.2/Telegram.svg" alt="Telegram" />
  </a></div>
    <div class="footer-link">
    <a href="https://www.instagram.com/masterildar" target="_blank" class="footer-link"
    ><img class="footer-link__icon"src="../images/icons-header/v.2/Instagram.svg" alt="Instagram"
  /></a></div>
    <div class="footer-link">
    <a href="https://www.twitter.com/master_ildar" target="_blank" class="footer-link"
    ><img class="footer-link__icon"src="../images/icons-header/v.2/Twitter.svg" alt="Twitter"
  /></a></div>
    <div class="footer-link">
    <a href="https://www.vk.com/mastrildar" target="_blank" class="footer-link">
    <img class="footer-link__icon"src="../images/icons-header/v.2/VK.svg" alt="VK" />
  </a></div>

      
      
      
      
      `;
    document.querySelector(".phone__image").src = "../images/phone-mobile.png";
  }
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

document.addEventListener("click", () => {
  console.log(window.outerWidth);
});
