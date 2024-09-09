export default function cartPriceUpdater() {

  const productCards = document.querySelectorAll('.cart__product-card');

  productCards.forEach((card) => {
    const priceElement = card.querySelector('.cart__card-properties-item-value');
    const basePriceElement = card.querySelector('.item-price');
    const quantityInput = card.querySelector('.cart__quantity-input');

    // Проверим, находим ли базовую цену
    if (!basePriceElement) {
      return;
    }

    const basePrice = parseInt(basePriceElement.textContent, 10) || 0;

    const updatePrice = () => {
      let additionalPrice = 0;

      const selectedOptions = card.querySelectorAll('.cart__option-input:checked');
      selectedOptions.forEach((option) => {
        const priceOption = option.closest('.cart__option-wrapper').querySelector('.cart__product-option-price');
        if (priceOption) {
          const optionPrice = parseInt(priceOption.textContent.replace(/\D/g, ''), 10) || 0;
          additionalPrice += optionPrice;
        }
      });

      let quantity = parseInt(quantityInput.value, 10);

      // Если количество меньше или равно нулю, устанавливаем его в 0 и цена будет 0
      if (quantity <= 0) {
        quantity = 0;
      }

      const totalPrice = (basePrice + additionalPrice) * quantity;
      priceElement.textContent = `${totalPrice} rsd`;
    };

    // Событие на изменение опций
    card.querySelectorAll('.cart__option-input').forEach((input) => {
      input.addEventListener('change', () => {
        updatePrice();
      });
    });

    // Событие на изменение количества
    quantityInput.addEventListener('input', () => {
      updatePrice();
    });

    // Initial price update
    updatePrice();
  });
}
