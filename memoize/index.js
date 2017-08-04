const memoize = function (f) {
  const cache = {};

  return function() {
    let arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
}

module.exports = memoize;