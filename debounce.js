export default function debounce(func, wait) {
  let timer = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      func.call(this, ...args);
    }, wait);
  };
}
