Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (!this.length) return [];

  const length = this.length;

  let filteredArray = [];

  for (let i = 0; i < length; i++) {
    if (callbackFn.call(thisArg, this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }

  return filteredArray;
};

// let newArr = [1,2,3,4].myFilter((curr, index, arr) => {}, this)
