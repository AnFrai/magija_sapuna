export const searchModule = (() => {
  const searchOpenButton = document.getElementById('search-open-button');
  const searchActivationButton = document.getElementById('search-activation-button');
  const clearInputButton = document.getElementById('clear-input-button');
  const searchInput = document.getElementById('search');
  const cartButtonWrapper = document.querySelector('.user-communication__button-wrapper--cart');
  let isSearchOpen = false;
  const defaultValue = searchInput.value;

  const toggleVisibility = (element) => {
    element.classList.toggle('visually-hidden');
  };

  // Определяем функцию closeSearch перед ее использованием
  function closeSearch() {
    toggleVisibility(searchActivationButton);
    toggleVisibility(searchInput);
    toggleVisibility(cartButtonWrapper);
    searchOpenButton.classList.remove('icon-button--user-communication-search-opened');
    searchOpenButton.classList.remove('user-communication__button--search-opened');
    isSearchOpen = false;

    // Скрыть кнопку очистки
    clearInputButton.classList.add('visually-hidden');
  }

  const handleOutsideClick = (event) => {
    if (isSearchOpen && !searchInput.contains(event.target) && !searchOpenButton.contains(event.target) && !clearInputButton.contains(event.target)) {
      closeSearch();
    }
  };

  const openSearch = () => {
    toggleVisibility(searchActivationButton);
    toggleVisibility(searchInput);
    toggleVisibility(cartButtonWrapper);
    searchOpenButton.classList.toggle('icon-button--user-communication-search-opened');
    searchOpenButton.classList.toggle('user-communication__button--search-opened');
    isSearchOpen = true;

    if (isSearchOpen) {
      searchInput.focus();
    }

    clearInputButton.classList.toggle('visually-hidden', searchInput.value.trim() === '');
  };

  const clearSearch = (event) => {
    event.stopPropagation();
    searchInput.value = '';
    searchInput.focus();
    clearInputButton.classList.add('visually-hidden');
    localStorage.setItem('searchValue', defaultValue);
  };

  const handleInputChange = () => {
    const isSearchVisible = !searchInput.classList.contains('visually-hidden');
    if (isSearchVisible) {
      clearInputButton.classList.toggle('visually-hidden', searchInput.value.trim() === '');
      if (searchInput.value.trim() !== '') {
        localStorage.setItem('searchValue', searchInput.value);
      } else {
        localStorage.removeItem('searchValue');
      }
    }
  };

  const bindEvents = () => {
    document.addEventListener('click', handleOutsideClick);
    searchOpenButton.addEventListener('click', openSearch);
    clearInputButton.addEventListener('click', clearSearch);
    searchInput.addEventListener('input', handleInputChange);
  };

  const init = () => {
    searchInput.value = localStorage.getItem('searchValue') || defaultValue;
    bindEvents();
  };

  return { init };
})();
