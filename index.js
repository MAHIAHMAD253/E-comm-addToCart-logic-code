// // Sample products array
// const products = [
//     {
//         id: 1,
//         title: "Product A",
//         price: 100,
//         discount: 0.1 // 10% discount
//     },
//     {
//         id: 2,
//         title: "Product B",
//         price: 50,
//         discount: 0.05 // 5% discount
//     },
//     // Add more products as needed
// ];

// // Sample cart array
// let cart = [];

// // Example usage of the addToCart function
// console.log("Initial Cart:", cart);

// // Add Product A to the cart (Case-I: Product does not exist in the cart)
// cart = addToCart(cart, products[0]);
// console.log("Cart after adding Product A:", cart);

// // Add Product B to the cart (Case-I: Product does not exist in the cart)
// cart = addToCart(cart, products[1]);
// console.log("Cart after adding Product B:", cart);

// // Add Product A again to the cart (Case-II: Product already exists in the cart)
// cart = addToCart(cart, products[0]);
// console.log("Cart after adding Product A again:", cart);

// Define products array
let products = [
    { id: 1, price: 100, discount: 0.10 },
    { id: 2, price: 200, discount: 0.10 },
    { id: 3, price: 300, discount: 0.10 },
    { id: 4, price: 400, discount: 0.10 },
    { id: 5, price: 500, discount: 0.05 }
];

// Define initial cart
let cart = [];

// Define addToCart function
const addToCart = (cart, product)=> {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex === -1) {
        // Case-I: Product does not exist in the cart
        const quantity = 1;
        const discount = product.discount || 0;
        const totalPrice = product.price * (1 - discount);
        const total = totalPrice * quantity;

        // Create a new product object with quantity and total properties
        const newProduct = {
            ...product,
            qty: quantity,
            total
        };

        // Add the new product to the cart
        return [...cart, newProduct];
    } else {
        // Case-II: Product already exists in the cart
        const updatedCart = cart.map((item, index) => {
            if (index === existingProductIndex) {
                const newQuantity = item.qty + 1;
                const discount = item.discount || 0;
                const totalPrice = item.price * (1 - discount);
                const total = totalPrice * newQuantity;

                // Update quantity and total for existing product
                return {
                    ...item,
                    qty: newQuantity,
                    total
                };
            }
            return item;
        });

        return updatedCart;
    }
}

// Example usage of the addToCart function
console.log("Initial Cart:", cart);

// Add Product A to the cart (Case-I: Product does not exist in the cart)
cart = addToCart(cart, products[0]);
console.log("Cart after adding Product A:", cart);

// // Add Product B to the cart (Case-I: Product does not exist in the cart)
// cart = addToCart(cart, products[1]);
// console.log("Cart after adding Product B:", cart);

// // Add Product A again to the cart (Case-II: Product already exists in the cart)
// cart = addToCart(cart, products[0]);
// console.log("Cart after adding Product A again:", cart);

