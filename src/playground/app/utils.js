console.log("utils.js is running");

const square = x => x * x;
const add = (a, b = 8) => a + b;
const substract = (a, b = 8) => a - b;

export { square, add, substract as default };

// export const square = x => x * x;
// export const add = (a, b = 8) => a + b;
