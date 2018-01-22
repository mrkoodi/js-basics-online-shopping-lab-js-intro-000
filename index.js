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

function viewCart() {
  const l = cart.length;

  if (!l) {
    return console.log("Your shopping cart is empty.");
  }

  let itemsAndPrices = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
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
  if (cart.hasOwnProperty("toString")) {
    console.log("That item is not in your cart.");
  } else if (cart.hasOwnProperty(item)) {
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
