const square = function (x) {
  return x * x;
};

// No way to make it anonymous
// const squareArrow = (x) => {
//   return x * x;
// };

// New syntax
const squareArrow = (x) => x * x;

console.log(squareArrow(9));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));