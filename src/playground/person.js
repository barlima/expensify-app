// name export

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;

export { isAdult, canDrink };

// default export

const isSenior = (age) => age >= 65;

export default isSenior;