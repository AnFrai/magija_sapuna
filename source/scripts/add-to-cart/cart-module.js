import { cartStatusModule } from './cart-status-module.js';
import { cartProductModule } from './cart-product-module.js';
import { cartSyncModule } from './cart-sync-module.js';
import { animationModule } from '../card-added-animation-module.js';
import { setCookie, getCookie } from '../cookie-utils.js';

export const cartModule = (() => {
  let itemCount = parseInt(getCookie('cartItemCount'), 10) || 0;

  const handleCartAddition = (button) => {
    cartProductModule.addProductToCart(button);

    const productId = button.dataset.productId;
    const productCount = parseInt(getCookie(`product_${productId}_count`), 10) || 0;

    cartSyncModule.syncCartState(productId, productCount);

    itemCount++;
    cartStatusModule.updateCartStatus(itemCount);
    setCookie('cartItemCount', itemCount, 7);

    animationModule.showMessage(button);
  };

  const bindCartButtonEvents = () => {
    const cartButtons = document.querySelectorAll('.cart-button');
    cartButtons.forEach((button) => {
      button.addEventListener('click', () => handleCartAddition(button));
    });
  };

  const init = () => {
    bindCartButtonEvents();
    cartStatusModule.updateCartStatus(itemCount);

    const cartButtons = document.querySelectorAll('.cart-button');
    cartButtons.forEach((button) => {
      const productId = button.dataset.productId;
      cartProductModule.restoreProductState(button, productId);
    });
  };

  return { init };
})();
