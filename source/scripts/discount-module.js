export const discountModule = (() => {
  const applyDiscounts = () => {
    const cards = document.querySelectorAll('.catalog__card--sale');

    cards.forEach((card) => {
      const originalPriceElement = card.querySelector('.catalog__card-properties-item-value--sale');
      const discountPercentageElement = card.querySelector('.catalog__card-image-superscript-text--sale');
      const priceAfterDiscountElement = card.querySelector('.catalog__card-properties-item-value--sale-price');

      if (originalPriceElement && discountPercentageElement && priceAfterDiscountElement) {
        const originalPrice = parseFloat(originalPriceElement.textContent);
        let discountPercentage = parseFloat(discountPercentageElement.textContent.replace(/[^0-9.-]+/g, ''));

        discountPercentage = Math.abs(discountPercentage);

        const discountAmount = originalPrice * (discountPercentage / 100);
        let newPrice = originalPrice - discountAmount;
        newPrice = Math.round(newPrice / 10) * 10; // Округляем новую цену

        priceAfterDiscountElement.textContent = `${newPrice} rsd`;
      }
    });
  };

  const init = () => {
    applyDiscounts();
  };

  return { init };
})();
