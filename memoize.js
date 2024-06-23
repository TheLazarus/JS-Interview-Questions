export default function memoize(func) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    cache[key] = func.call(this, ...args);
    return cache[key];
  };
}
