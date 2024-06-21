function sum(finalSum) {
  return function (value) {
    return value === undefined ? finalSum : sum(value + finalSum);
  };
}
