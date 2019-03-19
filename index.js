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
   return "Your shopping cart is empty.";
 }
 else {
   var i = cart.length - 1
   var str = "."
   while (i > 0) {
     str = cart[i].name + ' at ' + cart[i].price + str;
     i--;
   }

   return str + "In your cart, you have ";
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
