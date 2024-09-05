export const favoritesModule = (() => {
  // Функция для переключения состояния кнопки добавления в избранное
  const toggleFavorite = (button) => {
    button.classList.toggle('catalog__card-button--favorite-add');
    button.classList.toggle('catalog__card-button--favorite-added');
  };

  const bindFavoriteButtonEvents = () => {
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach((button) => {
      button.addEventListener('click', () => toggleFavorite(button));
    });
  };

  const init = () => {
    bindFavoriteButtonEvents();
  };

  return { init };
})();
