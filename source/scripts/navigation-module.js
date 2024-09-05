export const navigationModule = (() => {
  const menuButton = document.querySelector('.user-communication__menu-button');
  const navigationList = document.querySelector('.main-nav__list');
  const listDownButtons = document.querySelectorAll('.main-nav__main-list-text--list-down');
  const subList = document.querySelector('.main-nav__sublist');
  const mainList = document.querySelector('.main-nav__main-list');

  // Определение функций до их использования
  const toggleMenu = () => {
    menuButton.classList.toggle('icon-button--user-communication-menu-opened');
    menuButton.classList.toggle('icon-button--user-communication-menu-closed');
    navigationList.classList.toggle('main-nav__list--mobile-opened');
    navigationList.classList.toggle('main-nav__list--mobile-closed');
  };

  const toggleSubList = (event) => {
    event.preventDefault();
    subList.classList.toggle('main-nav__sublist--closed');
    subList.classList.toggle('main-nav__sublist--opened');
    mainList.classList.toggle('main-nav__main-list--mobile-closed');
    mainList.classList.toggle('main-nav__main-list--mobile-opened');
  };

  const bindEvents = () => {
    menuButton.addEventListener('click', toggleMenu);
    listDownButtons.forEach((button) => button.addEventListener('click', toggleSubList));
  };

  const init = () => {
    bindEvents();
  };

  return { init };
})();
