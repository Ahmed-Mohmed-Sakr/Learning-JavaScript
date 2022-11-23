const products = [{ name: "Computer mouse" }];
const product = products[0];

// Truthy - values that resolves to true in boolen context
// False - values that resolves to false in boolen context
// Falsy vales: false, 0, empty string, null, undefind, NaN

if (product) {
  console.log("product found");
} else {
  console.log("product not found");
}
