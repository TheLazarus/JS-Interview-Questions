Array.prototype.myMap = function (callbackFn, thisArg) {
  const length = this?.length;

  if (length === 0) return [];

  let ans = [];

  for (let i = 0; i < length; i++) {
    if (this.hasOwnProperty(i)) {
      const modifiedValue = callbackFn.call(thisArg, this[i], i, this);
      ans.push(modifiedValue);
    }
  }

  return ans;
};
