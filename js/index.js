// Hola profes :)
// No sé por qué pero los tets no me pasan, sin embargo el comportamiento de la página es correcto.
// Lo subo igualmente, si puede ser en clase lo miramos. ¡Gracias!

// ITERATION 1
function updateSubtotal(product) {
  let priceElement = product.querySelector(".price span");
  let price = Number(priceElement.innerText);
  let quantityElement = product.querySelector(".quantity input");
  let quantity = Number(quantityElement.value);
  let subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerText = price * quantity;

  console.log('Calculating subtotal, yey!');
  return subtotalElement.innerText;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 & 3
  let pricesElement = document.getElementsByClassName("product");
  let priceTotalElement = document.querySelector("#total-value span");
  let priceTotal = 0;
  for(let i = 0; i < pricesElement.length; i++) {
    priceTotal += Number(updateSubtotal(pricesElement[i]));
  }
  priceTotalElement.innerText = priceTotal;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5
function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});