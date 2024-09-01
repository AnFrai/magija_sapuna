document.addEventListener('DOMContentLoaded', () => {
  // Кнопка поиска
  const searchOpenButton = document.getElementById('search-open-button');
  const searchActivationButton = document.getElementById('search-activation-button');
  const clearInputButton = document.getElementById('clear-input-button');
  const searchInput = document.getElementById('search');
  const cartButtonWrapper = document.querySelector('.user-communication__button-wrapper--cart');

  let isSearchOpen = false;
  const defaultValue = searchInput.value;

  function toggleVisibility(element) {
    element.classList.toggle('visually-hidden');
  }

  searchInput.value = localStorage.getItem('searchValue') || defaultValue;

  // Обработчик клика по кнопке открытия поиска
  searchOpenButton.addEventListener('click', () => {
    toggleVisibility(searchActivationButton);
    toggleVisibility(searchInput);
    toggleVisibility(cartButtonWrapper);
    searchOpenButton.classList.toggle('icon-button--user-communication-search-opened');
    searchOpenButton.classList.toggle('user-communication__button--search-opened');

    isSearchOpen = !searchInput.classList.contains('visually-hidden');

    if (isSearchOpen) {
      searchInput.focus();
    }
    clearInputButton.classList.toggle('visually-hidden', searchInput.value.trim() === '');
  });


  document.addEventListener('click', (event) => {
    if (isSearchOpen && !searchInput.contains(event.target) && !searchOpenButton.contains(event.target) && !clearInputButton.contains(event.target)) {
      searchActivationButton.classList.add('visually-hidden');
      clearInputButton.classList.add('visually-hidden');
      searchInput.classList.add('visually-hidden');
      searchOpenButton.classList.remove('icon-button--user-communication-search-opened');
      searchOpenButton.classList.remove('user-communication__button--search-opened');
      cartButtonWrapper.classList.remove('visually-hidden');
      isSearchOpen = false;
    }
  });

  // Обработчик клика по кнопке очистки
  clearInputButton.addEventListener('click', (event) => {
    event.stopPropagation();
    searchInput.value = '';
    searchInput.focus();
    clearInputButton.classList.add('visually-hidden');
    localStorage.setItem('searchValue', defaultValue);
  });

  // Обработчик изменения текста в поле ввода
  searchInput.addEventListener('input', () => {
    if (isSearchOpen) {
      clearInputButton.classList.toggle('visually-hidden', searchInput.value.trim() === '');
    }
    if (searchInput.value.trim() !== '') {
      localStorage.setItem('searchValue', searchInput.value);
    } else {
      localStorage.removeItem('searchValue');
    }
  });


  // Кнопка меню
  const menuButton = document.querySelector('.user-communication__menu-button');
  const navigationList = document.querySelector('.main-nav__list');

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('icon-button--header-menu-button-opened');
    menuButton.classList.toggle('icon-button--header-menu-button-closed');
    navigationList.classList.toggle('main-nav__list--mobile-opened');
    navigationList.classList.toggle('main-nav__list--mobile-closed');
  });

  // кнопка подкатегории
  const listDownButtons = document.querySelectorAll('.main-nav__main-list-text--list-down');
  const subList = document.querySelector('.main-nav__sublist');
  const mainList = document.querySelector('.main-nav__main-list');

  listDownButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      // Переключаем классы для subList
      subList.classList.toggle('main-nav__sublist--closed');
      subList.classList.toggle('main-nav__sublist--opened');

      // Переключаем классы для mainList
      mainList.classList.toggle('main-nav__main-list--mobile-closed');
      mainList.classList.toggle('main-nav__main-list--mobile-opened');
    });
  });


  // рассчет высоты шапки для динамической прокрутки
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  const headerHeight = header.offsetHeight;

  main.style.paddingTop = `${headerHeight}px`;

  // прокручивающийся фон херо
  const hero = document.querySelector('.hero');
  const parallaxFactor = -0.7;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bgPositionY = scrollY * parallaxFactor;
    hero.style.backgroundPositionY = `${bgPositionY}px`;
  });


  // Тень прокрутки слайдера категорий в хедере
  const slider = document.querySelector('.main-header__category-slider');

  function updateShadow() {
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
  }

  updateShadow();
  slider.addEventListener('scroll', updateShadow);


  // Обновление иконки кол-ва товаров в корзине, изменения кнопок каталога
  const favoriteButtons = document.querySelectorAll('.favorite-button');

  favoriteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('catalog__card-button--favorite-add');
      button.classList.toggle('catalog__card-button--favorite-added');
    });
  });


  // Получаем ссылку на кнопку корзины
  const cartButton = document.querySelector('.user-communication__button--cart');
  const cartCounterSpan = document.querySelector('.user-communication__button-counter--cart');

  // Инициализируем счетчик, преобразовав его текущее значение или установив 0
  let itemCount = parseInt(cartCounterSpan.textContent, 10) || 0;

  // Функция для обновления состояния кнопки и счётчика
  function updateCartStatus() {
    if (itemCount > 0) {
      cartButton.classList.add('user-communication__button--cart-added');
      cartCounterSpan.classList.remove('visually-hidden');
      cartCounterSpan.textContent = itemCount; // Обновляем текст счетчика
      cartButton.title = `Artikala u korpi: ${itemCount}`;
    } else {
      cartButton.classList.remove('user-communication__button--cart-added');
      cartCounterSpan.classList.add('visually-hidden');
      cartButton.title = 'Nema artikala u korpi';
    }
  }

  updateCartStatus(); // Вызываем функцию при загрузке страницы для инициализации состояния

  const cartButtons = document.querySelectorAll('.cart-button');

  cartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Переключаем стили кнопок, указывающих на добавление или удаление товара
      button.classList.toggle('catalog__card-button--add-to-cart');
      button.classList.toggle('catalog__card-button--added-to-cart');

      // Обновляем счетчик в зависимости от добавления или удаления товара
      if (button.classList.contains('catalog__card-button--added-to-cart')) {
        itemCount++; // Увеличиваем счетчик
      } else {
        itemCount--; // Уменьшаем счетчик
      }

      updateCartStatus(); // Обновляем интерфейс
    });
  });


  // открытие-закрытие модального окна по клику на ссылку товара
  // document.querySelectorAll('.catalog__card-title-link, .catalog__card-image-link').forEach((element) => {
  //   element.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     openModal();
  //   });
  // });

  // function openModal() {
  //   const modal = document.querySelector('#your-modal-id');
  //   modal.style.display = 'block';
  // }

  // document.querySelector('.close-modal-button').addEventListener('click', () => {
  //   const modal = document.querySelector('#your-modal-id');
  //   modal.style.display = 'none';
  // });
});
