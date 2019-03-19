var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {};
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
 if (cart === undefined || cart.length < 1) {
   return 
 }
 else {
   
 }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
