import { animationModule } from './card-added-animation-module.js';
import { setCookie, getCookie } from './cookie-utils.js';

export const cartModule = (() => {
  const cartButton = document.querySelector('.user-communication__button--cart');
  const cartCounterSpan = document.querySelector('.user-communication__button-counter--cart');

  let itemCount = parseInt(getCookie('cartItemCount'), 10) || 0;

  const updateCartStatus = () => {
    if (itemCount > 0) {
      cartButton.classList.add('icon-button--user-communication-cart-added');
      cartCounterSpan.classList.remove('visually-hidden');
      cartCounterSpan.textContent = itemCount;
      cartButton.title = `Artikala u korpi: ${itemCount}`;
    } else {
      cartButton.classList.remove('icon-button--user-communication-cart-added');
      cartCounterSpan.classList.add('visually-hidden');
      cartButton.title = 'Nema artikala u korpi';
    }
    setCookie('cartItemCount', itemCount, 7);
  };

  const handleCartAddition = (button) => {
    const productId = button.dataset.productId;

    // Добавляем класс "добавлено в корзину" и сохраняем состояние в куки
    button.classList.add('catalog__card-button--added-to-cart');
    button.classList.remove('catalog__card-button--add-to-cart');
    setCookie(`product_${productId}_added`, 'true', 7);

    let productCount = parseInt(getCookie(`product_${productId}_count`), 10) || 0;
    productCount += 1;

    setCookie(`product_${productId}_count`, productCount, 7);

    const counterSpan = button.querySelector('.catalog__card-button-counter--cart');
    counterSpan.textContent = productCount;

    // Обновляем состояние корзины в избранных
    const favoriteItem = document.querySelector(`#favoriteList [data-product-id="${productId}"]`);
    if (favoriteItem) {
      const favoriteCartButton = favoriteItem.querySelector('.cart-button');
      favoriteCartButton.classList.add('catalog__card-button--added-to-cart');
      favoriteCartButton.classList.remove('catalog__card-button--add-to-cart');

      const favoriteCartCounter = favoriteCartButton.querySelector('.catalog__card-button-counter--cart');
      favoriteCartCounter.textContent = productCount;
    }

    // Обновляем состояние корзины в основном каталоге
    const originalItem = document.querySelector(`.catalog__list [data-product-id="${productId}"]`);
    if (originalItem) {
      const originalCartButton = originalItem.querySelector('.cart-button');
      originalCartButton.classList.add('catalog__card-button--added-to-cart');
      originalCartButton.classList.remove('catalog__card-button--add-to-cart');

      const originalCartCounter = originalCartButton.querySelector('.catalog__card-button-counter--cart');
      originalCartCounter.textContent = productCount;
    }

    itemCount++;
    updateCartStatus();

    animationModule.showMessage(button);
  };

  const bindCartButtonEvents = () => {
    const cartButtons = document.querySelectorAll('.cart-button');
    cartButtons.forEach((button) => {
      button.addEventListener('click', () => handleCartAddition(button));
    });
  };

  const restoreButtonState = (button, productId) => {
    // Восстанавливаем состояние кнопки из куки
    const isAdded = getCookie(`product_${productId}_added`) === 'true';
    if (isAdded) {
      button.classList.add('catalog__card-button--added-to-cart');
      button.classList.remove('catalog__card-button--add-to-cart');
    }
  };

  const init = () => {
    bindCartButtonEvents();

    itemCount = parseInt(getCookie('cartItemCount'), 10) || 0;
    updateCartStatus();

    const cartButtons = document.querySelectorAll('.cart-button');
    cartButtons.forEach((button) => {
      const productId = button.dataset.productId;
      const productCount = parseInt(getCookie(`product_${productId}_count`), 10) || 0;

      const counterSpan = button.querySelector('.catalog__card-button-counter--cart');
      counterSpan.textContent = productCount;

      // Восстанавливаем состояние каждой кнопки
      restoreButtonState(button, productId);
    });
  };

  return { init, handleCartAddition };
})();
