Array.prototype.myReduce = function (callbackFn, initialValue) {
  const length = this?.length;

  if (!length && initialValue !== undefined) return initialValue;

  if (!length) throw new Error("Array is empty");

  let startIndex = initialValue !== undefined ? 0 : 1;
  let acc = initialValue !== undefined ? initialValue : this[0];

  for (let i = startIndex; i < length; i++) {
    if (Object.hasOwn(this, i)) {
      acc = callbackFn(acc, this[i], i, this);
    }
  }

  return acc;
};
