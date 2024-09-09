export function initCartDropdowns(updatePrice) {
  const dropdownButtons = document.querySelectorAll('.cart__checkbox-radio-container-dropdown');
  const quantityControls = document.querySelectorAll('.cart__quantity-control');

  // Toggle dropdown
  dropdownButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const optionWrappers = this.closest('li').querySelectorAll('.cart__option-wrapper');

      optionWrappers.forEach((wrapper) => {
        wrapper.classList.toggle('visually-hidden');
      });

      button.classList.toggle('cart__checkbox-radio-container-dropdown--opened');
    });
  });

  // increase/decrease
  quantityControls.forEach((control) => {
    const increaseButton = control.querySelector('.cart__quantity-button--increase');
    const decreaseButton = control.querySelector('.cart__quantity-button--decrease');
    const quantityInput = control.querySelector('.cart__quantity-input');

    increaseButton.addEventListener('click', () => {
      const currentQuantity = parseInt(quantityInput.value, 10);
      quantityInput.value = currentQuantity + 1;

      if (typeof updatePrice === 'function') {
        updatePrice();
      }
    });

    decreaseButton.addEventListener('click', () => {
      const currentQuantity = parseInt(quantityInput.value, 10);
      if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;

        // Call updatePrice if necessary
        if (typeof updatePrice === 'function') {
          updatePrice();
        }
      }
    });
  });
}
