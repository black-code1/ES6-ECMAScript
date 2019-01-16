/*D15 100DaysOfCode & D14 301DaysOfCode */

//ES6: Explore Differences Between the var and let keywords
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  return (quote = catName + " says Meow!");
}
// console.log(catTalk());

//ES6: Compare Scopes of the var and let keywords
function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
// console.log(checkScope());

//ES6: Declare a Read-Only Variable with the const keywords
function printManyTTimes(str) {
  "use strict";
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
  // return SENTENCE;
}
// console.log(printManyTTimes("freeCodeCamp"));

//ES6: Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  return s;
}
// console.log(editInPlace());

//ES6: Prevent Object Mutation
function freezeObj() {
  "use stict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
// console.log(PI);

//ES6: Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => {
  "use strict";
  return new Date();
};
// console.log(magic);

//ES6: Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// console.log(myConcat([1, 2], [3, 4, 5]));

/*D16 100DaysOfCode & D14 301DaysOfCode */

//ES6: Write Higher Order Arrow Functions(map(),filter(),reduce())
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = arr => {
  "use strict";
  const squaredIntegers = arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

//ES6: Set Default Parameters for Your Functions
const inscrement = (function() {
  "use strict";
  return function inscrement(number, value = 1) {
    return number + value;
  };
})();
// console.log(inscrement(5, 2));
// console.log(inscrement(5));

//ES6: Use the Rest Operator with Function Parameters
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3));

/*D17 100DaysOfCode & D14 301DaysOfCode */
