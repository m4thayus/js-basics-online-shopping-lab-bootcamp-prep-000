var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var n = parseInt(Math.floor(Math.random() * 100) + 1);
 var itemObj = {'itemName': item, 'itemPrice': n};
 cart.push(itemObj);
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
     str = ', ' + cart[i].itemName + ' at $' + cart[i].itemPrice + str;
     i--;
   }
   str = cart[i].itemName + ' at $' + cart[i].itemPrice + str;
   return "In your cart, you have " + str;
 }
}

function total() {
  var grandTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    grandTotal = grandTotal + cart[i].itemPrice;
  }
  return grandTotal;
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    return 'Your total cost is ' + total() + `, which will be charged to the card ${cardNumber}`;
  }
}
