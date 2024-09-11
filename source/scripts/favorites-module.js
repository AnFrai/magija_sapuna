import { cartModule } from './add-to-cart/cart-module.js'; // Импортируем модуль корзины
import { toggleFavoriteMessage } from './favorite-text-visibility-module.js';

export const favoritesModule = (() => {
  // Функция для обновления всех кнопок избранного
  const updateFavoriteButtons = (productId, isFavorite) => {
    const catalogButtons = document.querySelectorAll(`[data-product-id="${productId}"] .favorite-button`);
    catalogButtons.forEach((button) => {
      if (isFavorite) {
        button.classList.remove('catalog__card-button--favorite-add');
        button.classList.add('catalog__card-button--favorite-added');
      } else {
        button.classList.remove('catalog__card-button--favorite-added');
        button.classList.add('catalog__card-button--favorite-add');
      }
    });
  };

  // Удаление товара из избранного
  const removeFromFavorites = (productId) => {
    let favorites = getFavorites();
    favorites = favorites.filter((id) => id !== productId);
    saveFavorites(favorites);

    // Обновляем состояние кнопок "Избранное" на всех страницах
    updateFavoriteButtons(productId, false);

    // Удаляем товар из списка избранных на главной странице
    const favoriteListItem = document.querySelector(`#favoriteList [data-product-id="${productId}"]`);
    if (favoriteListItem) {
      favoriteListItem.remove();
    }

    toggleFavoriteMessage();
  };

  // Функция для обновления списка избранных товаров на главной странице
  const updateFavoriteList = (productId, productCard) => {
    const favoriteList = document.getElementById('favoriteList');
    if (favoriteList) {
      const cardCopy = productCard.cloneNode(true);

      // Обновляем кнопку избранного у новой карточки
      const favoriteButton = cardCopy.querySelector('.favorite-button');
      favoriteButton.classList.remove('catalog__card-button--favorite-add');
      favoriteButton.classList.add('catalog__card-button--favorite-added');

      // Привязываем обработчик для удаления товара из избранного
      favoriteButton.addEventListener('click', () => removeFromFavorites(productId));

      // Привязываем обработчики для добавления в корзину, используя cartModule
      const cartButton = cardCopy.querySelector('.cart-button');
      cartButton.addEventListener('click', () => cartModule.handleCartAddition(cartButton));

      favoriteList.appendChild(cardCopy);
    }
  };

  // Получение избранных товаров из localStorage
  const getFavorites = () => JSON.parse(localStorage.getItem('favorites')) || [];

  // Сохранение избранных товаров в localStorage
  const saveFavorites = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  // Добавление товара в избранное
  const addToFavorites = (productId, productCard) => {
    const favorites = getFavorites();
    if (!favorites.includes(productId)) {
      favorites.push(productId);
      saveFavorites(favorites);

      // Обновляем состояние кнопок "Избранное" на всех страницах
      updateFavoriteButtons(productId, true);

      // Обновляем список избранного на главной странице (если он есть)
      updateFavoriteList(productId, productCard);
    }
  };

  // Функция для переключения состояния кнопки добавления в избранное
  const toggleFavorite = (button) => {
    const productCard = button.closest('.catalog__card');
    const productId = productCard.querySelector('.cart-button').dataset.productId;

    // Если товар уже добавлен, удаляем из избранного
    if (button.classList.contains('catalog__card-button--favorite-added')) {
      removeFromFavorites(productId);
    } else {
      // Добавляем в избранное
      addToFavorites(productId, productCard);
    }
  };

  // Привязка событий к кнопкам "Избранное"
  const bindFavoriteButtonEvents = () => {
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach((button) => {
      button.addEventListener('click', () => toggleFavorite(button));
    });
  };

  // Инициализация: загрузка избранных товаров при загрузке страницы
  const initFavoritesFromStorage = () => {
    const favorites = getFavorites();

    // Обновляем кнопки избранного на всех страницах
    favorites.forEach((productId) => {
      const productCard = document.querySelector(`[data-product-id="${productId}"]`);
      if (productCard) {
        const favoriteButton = productCard.querySelector('.favorite-button');

        if (favoriteButton) {
          favoriteButton.classList.remove('catalog__card-button--favorite-add');
          favoriteButton.classList.add('catalog__card-button--favorite-added');
        }

        // Обновляем список избранного на главной странице (если он есть)
        updateFavoriteList(productId, productCard);
      }
    });

    toggleFavoriteMessage();
  };

  // Инициализация модуля
  const init = () => {
    bindFavoriteButtonEvents();
    initFavoritesFromStorage(); // Загрузка избранных товаров при старте
  };

  return { init };
})();
