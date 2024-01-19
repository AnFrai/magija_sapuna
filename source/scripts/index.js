document.addEventListener('DOMContentLoaded', function () {
  // Кнопка поиска
  var searchOpenButton = document.getElementById("searchOpenButton");
  var searchActivationButton = document.getElementById("searchActivationButton");
  var searchInput = document.getElementById("search");
  var wishlistButtonWrapper = document.querySelector(".user-communication__button-wrapper--wishlist");
  var cartButtonWrapper = document.querySelector(".user-communication__button-wrapper--cart");

  searchOpenButton.addEventListener('click', function () {
    searchActivationButton.classList.toggle("visually-hidden");
    searchInput.classList.toggle("visually-hidden");
    wishlistButtonWrapper.classList.toggle("visually-hidden");
    cartButtonWrapper.classList.toggle("visually-hidden");
    searchOpenButton.classList.toggle("icon-button__user-communication--search-button-opened");
  });

  // Кнопка меню
  const menuButton = document.querySelector('.main-header__menu-button');
  const navigationList = document.querySelector('.main-nav__list');

  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('icon-button__header-menu-button--opened');
    menuButton.classList.toggle('icon-button__header-menu-button--closed');
    navigationList.classList.toggle('main-nav__list--mobile-opened');
    navigationList.classList.toggle('main-nav__list--mobile-closed');
  });
});
