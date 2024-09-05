export const faqHarmonicaModule = (() => {
  // Функция для переключения видимости элемента
  const toggleVisibility = (element) => {
    element.classList.toggle('visually-hidden');
  };

  const handleFaqToggle = (button) => {
    const answer = button.nextElementSibling;
    toggleVisibility(answer);
    button.classList.toggle('faq__card-title--opened');
  };

  const bindFaqButtonEvents = () => {
    const cardTitles = document.querySelectorAll('.faq__card-title');
    cardTitles.forEach((button) => {
      button.addEventListener('click', () => handleFaqToggle(button));
    });
  };

  const init = () => {
    bindFaqButtonEvents();
  };

  return { init };
})();
