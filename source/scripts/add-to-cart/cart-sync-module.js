export const cartSyncModule = (() => {
  const syncCartState = (productId, productCount) => {
    const favoriteItem = document.querySelector(`#favoriteList [data-product-id="${productId}"]`);
    if (favoriteItem) {
      const favoriteCartButton = favoriteItem.querySelector('.cart-button');
      favoriteCartButton.classList.add('catalog__card-button--added-to-cart');
      favoriteCartButton.classList.remove('catalog__card-button--add-to-cart');
      favoriteCartButton.querySelector('.catalog__card-button-counter--cart').textContent = productCount;
    }

    const originalItem = document.querySelector(`.catalog__list [data-product-id="${productId}"]`);
    if (originalItem) {
      const originalCartButton = originalItem.querySelector('.cart-button');
      originalCartButton.classList.add('catalog__card-button--added-to-cart');
      originalCartButton.classList.remove('catalog__card-button--add-to-cart');
      originalCartButton.querySelector('.catalog__card-button-counter--cart').textContent = productCount;
    }
  };

  return { syncCartState };
})();
