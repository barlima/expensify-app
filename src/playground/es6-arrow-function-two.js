// argument object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments); // Not allowed in arrow functions
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Philadlephia', 'New York', 'Dublin'],
  // printPlacesLived: function() {  // But this has to be es5
  printPlacesLived() {         // This works too, es6 - no function keyword
    // const that = this;  // work around

    // this.cities.forEach(function (city) {
    //   console.log(that.name + ' has lived in ' + city);
    // });

    return this.cities.map((city) => this.name + ' has lived in ' + city);

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city); // Usefull!!! :) 
    // })
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2, 5, 8],
  multiplyBy: 26,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());