// Named export (as meny you need)
// defult export (only one)

const add = (a, b) => a + b;
const name = "ahmed sakr";

const square = (x) => x * x;
console.log("from my code");
export { add, name, square as default };
