function get(objectParam, pathParam, defaultValue) {
  if (!objectParam || !pathParam) return defaultValue;

  let keys = typeof pathParam === "string" ? pathParam.split(".") : pathParam;

  let object = objectParam;
  let index = 0;
  let l = keys.length;

  while (object != null && index < l) {
    object = object[keys[index]];
    index++;
  }

  const value = index === l ? object : undefined;
  return value === undefined ? defaultValue : value;
}

console.log(get());
