function throttle(func, wait) {
  let timer = null;

  return function (...args) {
    if (timer === null) {
      func.call(this, ...args);
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
      }, wait);
    }
  };
}
