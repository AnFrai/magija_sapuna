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
});
