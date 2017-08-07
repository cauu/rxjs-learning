const _ = require('lodash');

function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const add = (a, b) => a + b;

const addOne = _.curry(add)(1);
const addTwo = _.curry(add)(2);

const addThree = compose(addTwo, addOne);

addThree(1);