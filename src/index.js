
// this code can be run direclty with node
// https://nodejs.org/api/esm.html#esm_ecmascript_modules
// $ node --version
// v13.7.0

// Files ending in .js, or extensionless files, when the nearest parent package.json file contains a top-level field "type" with a value of "module".
// test
// run with: node --experimental-modules test.js 

// mandatory extention when importing
// https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs
import T from './module.js'
import * as MyT from './module.js';

console.log(T(4))
console.log('test')

const myArrowFunction = a => a + 3

const myObj = {a: 'name', b: 'another value'};
const myObj2 = {...myObj, j: 'sdf'}

const asyncFunc = async a => new Promise((resolve) => {
  resolve(a + 4);
});

console.log(myObj2);
console.log(`myarrowFunction: ${myArrowFunction(5)}`);

console.log(asyncFunc(4))

const execAsync = async () => {
  const r = await asyncFunc(5);
  console.log(`promise result: ${r}`)
}

console.log(MyT)
console.log(MyT.myFunc(5))

execAsync()