export function toggleFavoriteMessage() {
  const favoriteList = document.getElementById('favoriteList');
  const favoriteMessage = document.querySelector('.catalog-favorite__message');

  if (favoriteList && favoriteMessage) {
    if (favoriteList.children.length > 0) {
      favoriteMessage.classList.add('visually-hidden');
    } else {
      favoriteMessage.classList.remove('visually-hidden');
    }
  }
}
