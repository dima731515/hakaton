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
