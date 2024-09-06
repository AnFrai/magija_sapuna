// export const getMainHeaderCategorySlider = () => document.querySelector('.main-header__category-slider');

export const getCartButton = () => document.querySelector('.user-communication__button--cart');
export const getCartCounterSpan = () => document.querySelector('.user-communication__button-counter--cart');
export const getMessageDiv = (button) => button.closest('.catalog__card').querySelector('.catalog__card-message');
export const getMessageText = (messageDiv) => messageDiv.querySelector('.catalog__card-message-text');
export const getCartButtons = () => document.querySelectorAll('.cart-button');
