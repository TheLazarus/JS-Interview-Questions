Function.prototype.myBind = function (thisArg, ...argArray) {
  return (...args) => {
    return this.call(thisArg, ...argArray, ...args);
  };
};


// let f = g.bind(this, arg1, arg2);

// f(x, y);


return (...args) => {
  return this.call(thisArg, ...argArray, ..args);
}