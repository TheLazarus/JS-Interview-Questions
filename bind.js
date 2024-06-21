Function.prototype.myBind = function (thisArg, ...argArray) {
  return (...args) => {
    return this.call(thisArg, ...argArray, ...args);
  };
};
