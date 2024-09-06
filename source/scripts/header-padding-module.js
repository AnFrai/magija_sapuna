export const headerPaddingModule = (() => {
  const adjustMainPadding = () => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (header && main) {
      const headerHeight = header.offsetHeight;
      main.style.paddingTop = `${headerHeight}px`;
    }
  };

  const init = () => {
    adjustMainPadding();
    window.addEventListener('resize', adjustMainPadding); // Обновляем отступ при изменении размера окна
  };

  return { init };
})();
