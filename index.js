var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random()*100)
 + 1;
 cart.push({[item]: itemPrice});
 console.log(`${item} has been added to your cart.`);
 return cart;

}

function viewCart(){
   if (cart.length === 0) {
      console.log("Your shopping cart is empty.");
    } else {

   if (cart.length === 1) {
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])[0]}.`);

    } else if  (cart.length === 2) {
      console.log(cart);
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
    } else if (cart.length >== 3 ) {
       for (var i=0; i < cart.length; i++) {
    cart[i];
      console.log(`In your cart, you have ${Object.keys(cart[i])} at $${Object.values(cart[i])[0]}, ${Object.keys(cart[i])} at $${Object.values(cart[i])[1]}, and ${Object.keys(cart[i])} at $${Object.values(cart[i])[2]}.`);
    }

     }
  }


}

function total() {
  // write your code here
  var itemPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    itemPrice += Object.values(cart[i])[0];
  }
  return itemPrice;
}

function removeFromCart(item) {
  // write your code here
  if (cart.hasOwnProperty(cart[item] !== item)) {
    console.log("That item is not in your cart.");
  } else if (cart.hasOwnProperty(cart[item])) {
    cart[item].pop();

  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${[total()]}, which will be charged to the card ${cardNumber}.`);
  }
    return cart.length = 0;
}
