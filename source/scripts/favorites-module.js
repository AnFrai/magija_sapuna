import { cartModule } from './cart-module.js'; // Импортируем модуль корзины
import { toggleFavoriteMessage } from './favorite-text-visibility-module.js';

export const favoritesModule = (() => {
  // Получение избранных товаров из localStorage
  const getFavorites = () => JSON.parse(localStorage.getItem('favorites')) || [];

  // Сохранение избранных товаров в localStorage
  const saveFavorites = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  // Удаление товара из избранного
  const removeFromFavorites = (productId) => {
    let favorites = getFavorites();
    favorites = favorites.filter((id) => id !== productId);
    saveFavorites(favorites);

    // Удаляем товар только из списка избранных, а не из основного каталога
    const favoriteListItem = document.querySelector(`#favoriteList [data-product-id="${productId}"]`);
    if (favoriteListItem) {
      favoriteListItem.remove();
    }

    // Обновляем состояние кнопки "Избранное" в основном каталоге
    const catalogItem = document.querySelector(`.catalog__list [data-product-id="${productId}"] .favorite-button`);
    if (catalogItem) {
      catalogItem.classList.remove('catalog__card-button--favorite-added');
      catalogItem.classList.add('catalog__card-button--favorite-add');
    }

    toggleFavoriteMessage();
  };

  // Обновление списка избранных товаров
  const updateFavoriteList = (productId, productCard) => {
    const favoriteList = document.getElementById('favoriteList');
    const cardCopy = productCard.cloneNode(true);

    // Обновляем класс кнопки избранного у новой карточки
    const favoriteButton = cardCopy.querySelector('.favorite-button');
    favoriteButton.classList.remove('catalog__card-button--favorite-add');
    favoriteButton.classList.add('catalog__card-button--favorite-added');

    // Привязываем обработчик для удаления товара из избранного
    favoriteButton.addEventListener('click', () => removeFromFavorites(productId));

    // Привязываем обработчики для кнопки добавления в корзину, используя cartModule
    const cartButton = cardCopy.querySelector('.cart-button');
    cartButton.addEventListener('click', () => cartModule.handleCartAddition(cartButton));

    favoriteList.appendChild(cardCopy);

    toggleFavoriteMessage();
  };

  // Добавление товара в избранное
  const addToFavorites = (productId, productCard) => {
    const favorites = getFavorites();
    if (!favorites.includes(productId)) {
      favorites.push(productId);
      saveFavorites(favorites);
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
      button.classList.remove('catalog__card-button--favorite-add');
      button.classList.add('catalog__card-button--favorite-added');
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
    favorites.forEach((productId) => {
      const productCard = document.querySelector(`[data-product-id="${productId}"]`);
      if (productCard) {
        productCard.querySelector('.favorite-button').classList.remove('catalog__card-button--favorite-add');
        productCard.querySelector('.favorite-button').classList.add('catalog__card-button--favorite-added');
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
