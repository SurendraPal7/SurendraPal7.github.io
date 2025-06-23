// Shopping cart object to hold product IDs and their quantities
let cart = {};

// List of available products
const products = [
  { id: 1, name: "Shirt", price: 899 },
  { id: 2, name: "T-Shirt", price: 599 },
  { id: 3, name: "Jeans", price: 1499 }
];

// Function to add a product to the cart
function addToCart(id) {
  // If item exists in cart, increment quantity; else set to 1
  cart[id] = (cart[id] || 0) + 1;
  updateCartUI();
}

// Function to decrement product quantity from cart
function decrementFromCart(id) {
  if (cart[id]) {
    cart[id]--;
    // If quantity becomes zero or less, remove it from cart
    if (cart[id] <= 0) {
      delete cart[id];
    }
    updateCartUI();
  }
}

// Function to update the cart display in UI
function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  const totalElement = document.getElementById("total");

  cartItems.innerHTML = ""; // Clear existing cart display
  let total = 0;

  products.forEach(product => {
    const quantity = cart[product.id];
    if (quantity) {
      const cost = product.price * quantity;
      total += cost;

      // Create list item
      const item = document.createElement("li");
      item.innerHTML = `
        ${product.name} - ₹${product.price} × ${quantity} = ₹${cost}
         <button onclick="decrementFromCart(${product.id})">-</button>
        <button onclick="addToCart(${product.id})">+</button>
       
      `;
      cartItems.appendChild(item);
    }
  });

  totalElement.textContent = `Total: ₹${total}`;
}
