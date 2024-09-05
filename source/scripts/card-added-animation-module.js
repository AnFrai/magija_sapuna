export const animationModule = (() => {
  const showMessage = (button) => {
    const messageDiv = button.closest('.catalog__card').querySelector('.catalog__card-message');
    const messageText = messageDiv.querySelector('.catalog__card-message-text');

    messageText.classList.add('catalog__card-message-text--added');
    setTimeout(() => {
      messageText.classList.remove('catalog__card-message-text--added');
    }, 500);

    if (messageDiv.classList.contains('catalog__card-message--animate')) {
      clearTimeout(messageDiv.timeoutId);
      messageDiv.timeoutId = setTimeout(() => {
        messageDiv.classList.remove('catalog__card-message--animate');
      }, 4000);
    } else {
      messageDiv.classList.add('catalog__card-message--animate');
      messageDiv.timeoutId = setTimeout(() => {
        messageDiv.classList.remove('catalog__card-message--animate');
      }, 4000);
    }
  };

  return { showMessage };
})();
