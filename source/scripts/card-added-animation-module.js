export const animationModule = (() => {
  const showMessage = (button) => {
    const messageDiv = button.closest('.slider-catalog__card').querySelector('.slider-catalog__card-message');
    const messageText = messageDiv.querySelector('.slider-catalog__card-message-text');

    messageText.classList.add('slider-catalog__card-message-text--added');
    setTimeout(() => {
      messageText.classList.remove('slider-catalog__card-message-text--added');
    }, 500);

    if (messageDiv.classList.contains('slider-catalog__card-message--animate')) {
      clearTimeout(messageDiv.timeoutId);
      messageDiv.timeoutId = setTimeout(() => {
        messageDiv.classList.remove('slider-catalog__card-message--animate');
      }, 4000);
    } else {
      messageDiv.classList.add('slider-catalog__card-message--animate');
      messageDiv.timeoutId = setTimeout(() => {
        messageDiv.classList.remove('slider-catalog__card-message--animate');
      }, 4000);
    }
  };

  return { showMessage };
})();
