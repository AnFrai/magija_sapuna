// cart-module.js
import { setCookie, getCookie, eraseCookie } from './cookie-utils.js';
import { getCartButton, getCartCounterSpan, getMessageDiv, getMessageText, getCartButtons } from './dom-utils.js';

const cartItems = JSON.parse(getCookie('cartItems')) || {};

const updateCartStatus = () => {
  const cartButton = getCartButton();
  const cartCounterSpan = getCartCounterSpan();
  const itemCount = Object.values(cartItems).reduce((total, count) => total + count, 0);

  if (itemCount > 0) {
    cartButton.classList.add('icon-button--user-communication-cart-added');
    cartCounterSpan.classList.remove('visually-hidden');
    cartCounterSpan.textContent = itemCount;
    cartButton.title = `Artikala u korpi: ${itemCount}`;
    setCookie('cartItems', JSON.stringify(cartItems), 7);
  } else {
    cartButton.classList.remove('icon-button--user-communication-cart-added');
    cartCounterSpan.classList.add('visually-hidden');
    cartButton.title = 'Nema artikala u korpi';
    eraseCookie('cartItems');
  }
};

export const handleCartAddition = (button) => {
  const productId = button.dataset.productId;
  const messageDiv = getMessageDiv(button);
  const messageText = getMessageText(messageDiv);

  messageText.classList.add('catalog__card-message-text--added');
  setTimeout(() => {
    messageText.classList.remove('catalog__card-message-text--added');
  }, 500);

  messageDiv.classList.add('catalog__card-message--animate');
  setTimeout(() => {
    messageDiv.classList.remove('catalog__card-message--animate');
  }, 4000);

  cartItems[productId] = (cartItems[productId] || 0) + 1;
  updateCartStatus();

  const counterSpan = button.querySelector('.catalog__card-button-counter--cart');
  counterSpan.textContent = cartItems[productId];
};

export const init = () => {
  const cartButtons = getCartButtons();
  cartButtons.forEach((button) => {
    button.addEventListener('click', () => handleCartAddition(button));
  });
  updateCartStatus();
};

export default { init };
