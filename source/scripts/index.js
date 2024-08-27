document.addEventListener('DOMContentLoaded', () => {
  // Кнопка поиска
  const searchOpenButton = document.getElementById('search-open-button');
  const searchActivationButton = document.getElementById('search-activation-button');
  const searchInput = document.getElementById('search');
  const loginButtonWrapper = document.querySelector('.user-communication__button-wrapper--login');
  const cartButtonWrapper = document.querySelector('.user-communication__button-wrapper--cart');

  searchOpenButton.addEventListener('click', () => {
    searchActivationButton.classList.toggle('visually-hidden');
    searchInput.classList.toggle('visually-hidden');
    loginButtonWrapper.classList.toggle('visually-hidden');
    cartButtonWrapper.classList.toggle('visually-hidden');
    searchOpenButton.classList.toggle('icon-button--user-communication-search-opened');
  });

  // Кнопка меню
  const menuButton = document.querySelector('.main-header__menu-button');
  const navigationList = document.querySelector('.main-nav__list');

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('icon-button--header-menu-button-opened');
    menuButton.classList.toggle('icon-button--header-menu-button-closed');
    navigationList.classList.toggle('main-nav__list--mobile-opened');
    navigationList.classList.toggle('main-nav__list--mobile-closed');
  });

  // кнопка подкатегории
  const listDownButtons = document.querySelectorAll('.main-nav__main-list-text--list-down');
  const subList = document.querySelector('.main-nav__sublist');
  const mainList = document.querySelector('.main-nav__main-list');

  listDownButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      // Переключаем классы для subList
      subList.classList.toggle('main-nav__sublist--closed');
      subList.classList.toggle('main-nav__sublist--opened');

      // Переключаем классы для mainList
      mainList.classList.toggle('main-nav__main-list--mobile-closed');
      mainList.classList.toggle('main-nav__main-list--mobile-opened');
    });
  });


  // рассчет высоты шапки для динамической прокрутки
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  const headerHeight = header.offsetHeight;

  main.style.paddingTop = `${headerHeight}px`;

  // прокручивающийся фон херо
  const hero = document.querySelector('.hero');
  const parallaxFactor = -0.7;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bgPositionY = scrollY * parallaxFactor;
    hero.style.backgroundPositionY = `${bgPositionY}px`;
  });


  // Тень слайдера категорий шапки
  const slider = document.querySelector('.main-header__category-slider');
  const sliderList = document.querySelector('.category-slider-list');

  function updateShadow() {
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScrollLeft) {
      // Удаление тени, когда список прокручен до конца
      sliderList.style.setProperty('box-shadow', 'none');
    } else {
      // Добавление тени, если есть скрытый контент справа
      sliderList.style.setProperty('box-shadow', 'inset -30px 0 10px -20px rgba(0,0,0,0.5)');
    }
  }

  // Инициализация тени при загрузке страницы
  updateShadow();

  // Обновление тени при прокрутке
  slider.addEventListener('scroll', updateShadow);


  // Изменения кнопок каталога
  const favoriteButtons = document.querySelectorAll('.favorite-button');

  favoriteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('catalog__card-button--favorite-add');
      button.classList.toggle('catalog__card-button--favorite-added');
    });
  });

  const cartButtons = document.querySelectorAll('.cart-button');

  cartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('catalog__card-button--add-to-cart');
      button.classList.toggle('catalog__card-button--added-to-cart');
    });
  });
});
