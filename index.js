const _ = require('lodash');
const runTime = require('./run-time');
const memoize = require('./memoize');
const curry = require('./curry');

const params = [1,2,3,4,5];

// function genRandomParams(randomFunc, numbers) {
//   return randomFunc(numbers);
// }

// const random = _.curry(genRandomParams)(Math.random() * 10)(params);

runTime(memoize(Math.random))(1000)((t) => console.log('With memoize: Totle ' + t + 'ms'))('execute');

runTime(memoize(Math.random))(1000)((t) => console.log('Without memoize: Totle ' + t + 'ms'))('execute');

function test(a, b, c) {
  console.log(a, b, c);
}

curry(test)(1)(2)(3);