
// this code can be run direclty with node
// https://nodejs.org/api/esm.html#esm_ecmascript_modules


// Files ending in .js, or extensionless files, when the nearest parent package.json file contains a top-level field "type" with a value of "module".

// mandatory extention when importing
// https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs

// default import
import T from './module.js'
// independent imports
import * as MyT from './module.js';

// outputting import (1/2)
console.log(T)
// testing the function
console.log(T(4))

// outputting import (2/2)
console.log(MyT)
// testing a function
console.log(MyT.myFunc(5))

// arrow function
const myArrowFunction = a => a + 3;
console.log(`myarrowFunction: ${myArrowFunction(5)}`);

// spread operator
const myObj = {a: 'name', b: 'another value'};
const myObj2 = {...myObj, j: 'sdf'};
console.log(myObj2);

// async function
const asyncFunc = async a => new Promise((resolve) => {
  resolve(a + 4);
});

console.log(asyncFunc(4))

const execAsync = async () => {
  const r = await asyncFunc(5);
  console.log(`promise result: ${r}`)
}

execAsync()