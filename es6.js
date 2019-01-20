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

/*D16 100DaysOfCode & D15 301DaysOfCode */

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
// console.log(sum(1, 2, 3));

/*D17 100DaysOfCode & D16 301DaysOfCode */

// Revising arrow Function

/*D18 100DaysOfCode & D17 301DaysOfCode */

// ES6: Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1];
})();
// console.log(arr2);

// ES6: Use Destructing Assignment to Assign Variables from Objects
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const { tomorrow: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}

// console.log(getTempOfTmrw(AVG_TEMPERATURES));

// ES6: Use Destructing Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {
    tomorrow: { max: maxOfTomorrow }
  } = forecast;
  return maxOfTomorrow;
}
// console.log(getMaxOfTmrw(LOCAL_FORECAST));

/*D19 100DaysOfCode & D18 301DaysOfCode */

// ES6:Use Destructing Assignment to Assign Variables from Arrays
let a = 8,
  b = 6;
(() => {
  "use strict";
  [a, b] = [b, a];
})();
// console.log(a);
// console.log(b);

// ES6:Use Destructing Assignment with the Rest Operator to Reassign Array Elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);

// ES6:Use Destructing Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict";
  return ({ max, min }) => {
    return (max + min) / 2.0;
  };
})();
// console.log(stats);
// console.log(half(stats));

// ES6:Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  const resultDisplayArray = [
    `<li class="text-warning">${result.failure[0]}</li>`,
    `<li class="text-warning">${result.failure[1]}</li>`,
    `<li class="text-warning">${result.failure[2]}</li>`
  ];
  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);

/*D20 100DaysOfCode & D19 301DaysOfCode */

// ES6:Write Concise Object Litlle Declaration Using Simple Fields
const createPerson = (name, age, gender) => {
  "use strict";
  return { name, age, gender };
};
// console.log(createPerson("Zodiac Hasbro", 56, "male"));

// ES6:Write Concise Declarative Functions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
bicycle.setGear(3);
// console.log(bicycle.gear);

// ES6:Use class Syntax to Define a Constructor Function
function makeClass() {
  "use strict";
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
// console.log(carrot.name);

// ES6:Use getters and setters to Control Access to an Object
function makeClass() {
  "use strict";
  class Thermostat {
    constructor(Fahrenheit) {
      this.Fahrenheit = Fahrenheit;
    }
    get temperature() {
      return (5 / 9) * (this.Fahrenheit - 32);
    }

    set temperature(celcius) {
      this.Fahrenheit = (celcius * 9.0) / 5 + 32;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
// console.log(temp);

// ES6:Understand the Differences Betwwen import and require
// ("use strict");
// import { capitalizeString } from "es6";
// capitalizeString("hello!");

// ES6:Use export to Reuse a Code Block
// ("use strict");
// export const foo = "bar";
// export const bar = "foo";

// ES6:Use * to Import Everything from a File
// ("use strict");
// import * as objectString from "capitalize_strings";

// ES6:Create an Export Fallback with export default
// ("use strict");
// export default function substract(x, y) {
//   return x - y;
// }

// ES6:Import a Default Export
// ("use strict");
// import substract from "math_functions";
// substract(7, 4);

/*D21 100DaysOfCode & D20 301DaysOfCode */

// Regular Expressions: Using the Test Method
