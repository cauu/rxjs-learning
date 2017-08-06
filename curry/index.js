function add(a) {
  return function(b) {
    return a + b;
  }
}

function curry(fn) {
  return function container() {
    const args = arguments;

    if(args.length >= fn.length) {
      return fn(...args);
    }

    return container.bind(null, ...args);
  }
}

module.exports = curry;