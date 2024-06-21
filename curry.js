function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.call(this, ...args);
    }

    return (arg) =>
      arg === undefined
        ? curried.call(this, ...args)
        : curried.call(this, ...args, arg);
  };
}

function multiplyThreeNumbers(a, b, c) {
  return a * b * c;
}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);

console.log(curriedMultiplyThreeNumbers(4)(5)()()()()(6));
