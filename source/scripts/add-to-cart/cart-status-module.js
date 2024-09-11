export const cartStatusModule = (() => {
  const cartButton = document.querySelector('.user-communication__button--cart');
  const cartCounterSpan = document.querySelector('.user-communication__button-counter--cart');

  const updateCartStatus = (itemCount) => {
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

  return { updateCartStatus };
})();
