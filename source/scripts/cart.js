export function initCartDropdowns() {
  const dropdownButtons = document.querySelectorAll('.cart__checkbox-radio-container-dropdown');

  dropdownButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const optionWrappers = this.closest('li').querySelectorAll('.cart__option-wrapper');

      optionWrappers.forEach((wrapper) => {
        wrapper.classList.toggle('visually-hidden');
      });

      button.classList.toggle('cart__checkbox-radio-container-dropdown--opened');
    });
  });
}
