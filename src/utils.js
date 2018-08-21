console.log('utils.js is running');

// exports - default export - named exports

const square = (x) => x * x;
// export const square = (x) => x * x;

const add = (a, b) => a + b;
// export const add = (a, b) => a + b;

// export { square, add };  // named

const subtract = (a, b) => a - b;

export { square, add, subtract as default}; // only one default

// export default subratct; //  default