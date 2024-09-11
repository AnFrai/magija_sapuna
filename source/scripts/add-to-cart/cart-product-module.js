import { setCookie, getCookie } from '../cookie-utils';

export const cartProductModule = (() => {
  const addProductToCart = (button) => {
    const productId = button.dataset.productId;
    button.classList.add('catalog__card-button--added-to-cart');
    button.classList.remove('catalog__card-button--add-to-cart');
    setCookie(`product_${productId}_added`, 'true', 7);

    let productCount = parseInt(getCookie(`product_${productId}_count`), 10) || 0;
    productCount += 1;
    setCookie(`product_${productId}_count`, productCount, 7);

    const counterSpan = button.querySelector('.catalog__card-button-counter--cart');
    counterSpan.textContent = productCount;
  };

  const restoreProductState = (button, productId) => {
    const isAdded = getCookie(`product_${productId}_added`) === 'true';
    if (isAdded) {
      button.classList.add('catalog__card-button--added-to-cart');
      button.classList.remove('catalog__card-button--add-to-cart');
    }
  };

  return { addProductToCart, restoreProductState };
})();
