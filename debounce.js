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




timer = null;



if(timer === null) {
  func.call(this, ...args);
  timer = setTimeout(() => {
    clearTimeout(timer);
    timer = null;
  }, 1000);

}