const _ = require('lodash');

const runTime = function(f) {
  let startAt = new Date().getTime();
  let endAt = new Date().getTime();
  let current = 0;

  return _.curry(function exec(times, after, arg) {
    if(current >= times) return after(endAt - startAt);

    f(arg);

    current++;

    endAt = new Date().getTime();

    exec(times, after, arg);
  });
};

module.exports = runTime;
