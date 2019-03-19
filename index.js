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
 var n = parseInt(Math.floor(Math.random() * 100) + 1);
 newItem.name = item;
 newItem.price= n;
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
 if (cart === undefined || cart.length < 1) {
   return "Your shopping cart is empty.";
 }
 else {
   var i = cart.length - 1;
   var str = ".";
   while (i > 0) {
     str = ', ' + cart[i].name + ' at ' + cart[i].price + str;
     i--;
   }
   str = cart[i].name + ' at ' + cart[i].price + str;
   return "In your cart, you have " + str;
 }
}

function total() {
  grandTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    grandTotal = grandTotal + cart[i].price;
  }
  return grandTotal;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
