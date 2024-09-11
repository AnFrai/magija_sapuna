// Тени слайдера категорий шапки

export const sliderShadowModule = (() => {
  const slider = document.querySelector('.main-header__category-slider');

  // Функция для обновления теней в зависимости от положения скролла
  const updateShadow = () => {
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    // Добавляем буфер 5 пикселей, чтобы учесть возможное округление
    if (slider.scrollLeft >= maxScrollLeft - 5) {
      slider.style.setProperty('--shadow-end-opacity', '0');
    } else {
      slider.style.setProperty('--shadow-end-opacity', '1');
    }

    // Проверка на начало списка
    if (slider.scrollLeft <= 5) {
      slider.style.setProperty('--shadow-start-opacity', '0');
    } else {
      slider.style.setProperty('--shadow-start-opacity', '1');
    }
  };

  const bindScrollEvent = () => {
    slider.addEventListener('scroll', updateShadow);
  };

  const init = () => {
    updateShadow();
    bindScrollEvent();
  };

  return { init };
})();
