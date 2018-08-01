var nameVar = 'Bartek';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jack';
nameLet = 'John';   // Error when redefining
console.log('nameLet', nameLet);

const nameConst = 'Tom';
// nameConst = 'Jerry'; Error when redefining or reassigining
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping
// let, count - block scoping
// var - only function scope

var fullName = 'Bartek Perucki';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
