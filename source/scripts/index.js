document.addEventListener('DOMContentLoaded', () => {
  // Кнопка поиска
  const searchOpenButton = document.getElementById('search-open-button');
  const searchActivationButton = document.getElementById('search-activation-button');
  const searchInput = document.getElementById('search');
  const wishlistButtonWrapper = document.querySelector('.user-communication__button-wrapper--wishlist');
  const cartButtonWrapper = document.querySelector('.user-communication__button-wrapper--cart');

  searchOpenButton.addEventListener('click', () => {
    searchActivationButton.classList.toggle('visually-hidden');
    searchInput.classList.toggle('visually-hidden');
    wishlistButtonWrapper.classList.toggle('visually-hidden');
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
});
