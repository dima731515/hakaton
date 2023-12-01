
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
  if (window.outerWidth < 481) {
    return;
  }
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
  button.addEventListener("mouseup", () => {
    button.style.scale = "1";
  });
});

footerLink.forEach((link) => {
  if (window.outerWidth < 481) {
    return;
  }
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
  if (window.outerWidth < 481) {
    return;
  }
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
  if (window.outerWidth < 481) {
    return;
  }
  link.addEventListener("mouseenter", () => {
    link.firstChild.nextSibling.src = "../images/merch-arrow-square_hover.svg";
  });
  link.addEventListener("mouseleave", () => {
    link.firstChild.nextSibling.src = "../images/merch-arrow-square.svg";
  });
});

cardsContainer.addEventListener("mousedown", sliderStart);
cardsContainer.addEventListener("touchstart", swiperStart);

let baseLeft;
let value = null;
let x1 = null;

windowSize();
removeHover();

function windowSize() {
  if (window.outerWidth > 1600) {
    baseLeft = 48;
    maxLeft = -830;
    maxScale = 1.0519;
    scale = maxScale;
    value = baseLeft;
    console.log(1);
  } else if ((window.outerWidth < 1601) & (window.outerWidth > 1200)) {
    baseLeft = 85;
    maxLeft = -555;
    maxScale = 1.0519;
    scale = maxScale;
    value = baseLeft;
    console.log(2);
  } else if ((window.outerWidth < 1201) & (window.outerWidth > 1100)) {
    baseLeft = 48;
    maxLeft = -855;
    maxScale = 1.0519;
    scale = maxScale;
    value = baseLeft;
    console.log(3);
  } else if ((window.outerWidth > 800) & (window.outerWidth < 1100)) {
    baseLeft = 85;
    maxLeft = -560;
    maxScale = 1.0419;
    scale = maxScale;
    value = baseLeft;
    console.log(4);
  } else if ((window.outerWidth < 481) & (window.outerWidth >= 434)) {
    baseLeft = 0;
    maxLeft = -1025;
    console.log(5);
  } else if ((window.outerWidth < 434) & (window.outerWidth >= 484)) {
    baseLeft = 0;
    maxLeft = -1064;
    console.log(6);
  } else if ((window.outerWidth < 484) & (window.outerWidth >= 349)) {
    baseLeft = 0;
    maxLeft = -1093;
    console.log(7);
  } else if ((window.outerWidth < 349) & (window.outerWidth >= 327)) {
    baseLeft = 0;
    maxLeft = -1117;
    console.log(8);
  } else if (window.outerWidth < 327) {
    baseLeft = 0;
    maxLeft = -1140;
    console.log(9);
  }
}

function removeHover() {
  if (window.outerWidth < 481) {
    buttons.forEach((button, index) => {
      button.removeEventListener("mouseenter", () => {
        buttonArrow[index].classList.add("invisible");
        buttonArrowYellow[index].classList.remove("invisible");
      });
      button.removeEventListener("mouseleave", () => {
        buttonArrow[index].classList.remove("invisible");
        buttonArrowYellow[index].classList.add("invisible");
      });
    });
    footerLink.forEach((link) => {
      link.removeEventListener("mouseenter", () => {
        let hover = document.createElement("div");
        hover.classList.add("link__hover");
        link.append(hover);
      });
      link.removeEventListener("mouseleave", () => {
        document.querySelector(".link__hover").remove();
      });
    });
    imageContainer.forEach((container) => {
      container.removeEventListener("mouseenter", () => {
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

      container.removeEventListener("mouseleave", () => {
        container.firstChild.nextSibling.style.scale = "";
        container.firstChild.nextSibling.style.opacity = "1";

        document.querySelector(".card__hover").remove();
      });
    });

    cardLink.forEach((link) => {
      link.removeEventListener("mouseenter", () => {
        link.firstChild.nextSibling.src = "../images/merch-arrow-square_hover.svg";
      });
      link.removeEventListener("mouseleave", () => {
        link.firstChild.nextSibling.src = "../images/merch-arrow-square.svg";
      });
    });
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

function swiperStart(e) {
  merchCards.style.left = value + "px";
  let left = merchCards.style.left;
  left = +left.split("px")[0];

  x1 = e.touches[0].clientX;

  cardsContainer.addEventListener("touchmove", swipeMove);
  document.addEventListener("touchend", () => {
    cardsContainer.removeEventListener("touchmove", swipeMove);
  });

  function swipeMove(e) {
    let deltaX = (x1 - e.touches[0].clientX) * 2;
    merchCards.style.left = left + -deltaX + "px";
    value = left + -deltaX;

    if (value < maxLeft) {
      cardsContainer.removeEventListener("touchmove", swipeMove);
      merchCards.style.left = `${maxLeft}px`;
      value = maxLeft;
    }

    if (value > baseLeft) {
      merchCards.style.left = `${baseLeft}px`;
      value = baseLeft;
    }
  }
}
