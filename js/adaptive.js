window.addEventListener("resize", changePositionElements);

function changePositionElements() {
  if (window.outerWidth < 481) {
        
    document.querySelector(".prediction__content").innerHTML = `
    <div class="content__description">
    <img class="content-description__image" src="../images/chat-bubble.svg" alt="" />
    <h2 class="content-description__title">Заходи в чат-бот<br />каждый день и получай печенье с предсказанием</h2>
    <p class="content-description__text">Каждый день в чат-боте приходят приятные предсказания в виде печеньки</p>
    </div>
    <div class="content__image__container">
      <img class="content-image-container__image" src="../images/prediction-image.png" alt="" />
    </div>
    <a href="https://t.me/PriyatniyIldar_bot" target="_blank" class="content-description__button button">
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
    <a href="https://vk.com/pleasentildar" target="_blank" class="footer-link">
    <img class="footer-link__icon"src="../images/icons-header/v.2/VK.svg" alt="VK" />
  </a></div>`;
    
    document.querySelector(".statistics__wrapper").innerHTML = `
    <p class="statistics__text"><span class="statistics__numbers">100% </span> ЛОЯЛЬНОЙ АУДИТОРИИ</p>
    <p class="statistics__text"><span class="statistics__numbers">238 000 </span> ПОДПИСЧИКОВ В TELEGRAM</p>
    <p class="statistics__text"><span class="statistics__numbers">3 900 000 </span> ПОДПИСЧИКОВ НА YOUTUBE</p>
    <p class="statistics__text"><span class="statistics__numbers">1000 000 000+ </span> ПРОСМОТРОВ НА YOUTUBE</p>
    <p class="statistics__text"><span class="statistics__numbers">100% </span> ЛОЯЛЬНОЙ АУДИТОРИИ</p>`;
  }
}
