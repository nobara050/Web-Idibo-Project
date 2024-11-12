// Retrieve cart from localStorage or initialize an empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || {};

// Function to add an item to the cart
function addToCart(button) {
  // Get the parent card element
  var card = button.closest(".card");

  // Get the product name from the card
  var productName = card.querySelector(".card-name").textContent.trim();

  // Get the price from the card and clean it up (remove spaces or commas if needed)
  var price = parseFloat(
    card.querySelector(".card-price").textContent.replace(/\D/g, "")
  );

  // Add the item to the cart
  if (cart[productName]) {
    cart[productName].quantity += 1;
  } else {
    cart[productName] = { price: price, quantity: 1 };
  }

  // Save the cart data to localStorage
  saveCart();
}

// Function to save the cart data to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Optional: To view the cart (for debugging purposes)
function viewCart() {
  console.log(cart);
}
