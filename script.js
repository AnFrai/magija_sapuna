document.addEventListener("DOMContentLoaded", function() {
  let headerCartButton = document.querySelector('.header-cart-button');
  let productsNumber = document.querySelector('.products-number');
  let productPlus = document.querySelector('.plus');
  let productMinus = document.querySelector('.minus');
  let numProducts = parseInt(productsNumber.textContent);

  function updateCart() {
    productsNumber.textContent = numProducts;
    headerCartButton.classList.toggle('full', numProducts > 0);
  }

  productPlus.onclick = function() {
    numProducts++;
    updateCart();
    console.log(numProducts);
  };

  productMinus.onclick = function() {
    if (numProducts > 0) {
      numProducts--;
      updateCart();
      console.log(numProducts);
    }
  };

  //кликанье по категории фильтра
  let buttonContainers = document.querySelectorAll('.fieldset-openable');

  for (let buttonContainer of buttonContainers) {
    buttonContainer.onclick = function () {
        buttonContainer.classList.toggle('opened');
        buttonContainer.classList.toggle('closed');
    };
  };

});
