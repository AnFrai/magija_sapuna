// Прокрутка бекграунда hero

export const heroParallaxModule = (() => {
  const hero = document.querySelector('.hero');
  const heroButton = document.querySelector('.hero__button');
  const parallaxFactor = -0.2;

  // Функция, выполняющая параллакс эффект и обновление прозрачности кнопки
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Параллакс-эффект для фона
    const bgPositionY = scrollY * parallaxFactor;
    hero.style.backgroundPositionY = `${bgPositionY}px`;

    // Вычисляем прозрачность на основе прокрутки
    let opacity = (scrollY - 15) / 90;
    opacity = Math.max(0, Math.min(opacity, 1));

    // Применяем вычисленную прозрачность к кнопке
    heroButton.style.opacity = opacity;
    heroButton.style.pointerEvents = opacity > 0 ? 'auto' : 'none';
  };

  const bindScrollEvent = () => {
    window.addEventListener('scroll', handleScroll);
  };

  const init = () => {
    bindScrollEvent();
  };

  return { init };
})();
