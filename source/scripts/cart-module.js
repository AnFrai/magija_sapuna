export const cartModule = (() => {
  const cartButton = document.querySelector('.user-communication__button--cart');
  const cartCounterSpan = document.querySelector('.user-communication__button-counter--cart');
  let itemCount = parseInt(cartCounterSpan.textContent, 10) || 0;

  // Апдейт кол-ва товаров в корзине
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
  };

  // Всплывающее окно "добавлено в корзину"
  const handleCartAddition = (button) => {
    button.classList.add('catalog__card-button--added-to-cart');
    button.classList.remove('catalog__card-button--add-to-cart');

    const messageDiv = button.closest('.catalog__card').querySelector('.catalog__card-message');
    const messageText = messageDiv.querySelector('.catalog__card-message-text');

    messageText.classList.add('catalog__card-message-text--added');
    setTimeout(() => {
      messageText.classList.remove('catalog__card-message-text--added');
    }, 500);

    if (messageDiv.classList.contains('catalog__card-message--animate')) {
      clearTimeout(messageDiv.timeoutId);
      messageDiv.timeoutId = setTimeout(() => {
        messageDiv.classList.remove('catalog__card-message--animate');
      }, 4000);
    } else {
      messageDiv.classList.add('catalog__card-message--animate');
      messageDiv.timeoutId = setTimeout(() => {
        messageDiv.classList.remove('catalog__card-message--animate');
      }, 4000);
    }

    const counterSpan = button.querySelector('.catalog__card-button-counter--cart');
    const currentCount = parseInt(counterSpan.textContent, 10);
    counterSpan.textContent = currentCount + 1;

    itemCount++;
    updateCartStatus();
  };

  const bindCartButtonEvents = () => {
    const cartButtons = document.querySelectorAll('.cart-button');
    cartButtons.forEach((button) => button.addEventListener('click', () => handleCartAddition(button)));
  };

  const init = () => {
    bindCartButtonEvents();
    updateCartStatus();
  };

  return { init };
})();
