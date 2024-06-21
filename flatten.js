function flatten(value) {
  if (!Array.isArray(value))
    throw new TypeError(`Expected an array, found - ${typeof value} instead!`);

  let ans = [];

  function flattenArray(value) {
    if (!Array.isArray(value)) {
      ans.push(value);
      return;
    }

    for (let val of value) {
      flattenArray(val);
    }
  }

  flattenArray(value);

  return ans;
}

console.log(flatten([1, [2, [3, [4, [5]]]]]));
