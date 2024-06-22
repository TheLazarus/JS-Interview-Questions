function squashObject(obj) {
  let finalObj = {};

  function squasher(obj, finalKey) {
    if (typeof obj !== "object" || obj === null) {
      finalObj[finalKey] = obj;
      return;
    }

    for (let key of Object.keys(obj)) {
      squasher(
        obj[key],
        finalKey.length === 0
          ? finalKey.concat(key)
          : finalKey.concat(key ? `.${key}` : key)
      );
    }
  }

  squasher(obj, "");
  return finalObj;
}
