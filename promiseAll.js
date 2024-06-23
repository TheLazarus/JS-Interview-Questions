function promiseAll(iterable) {
  return new Promise((res, rej) => {
    const l = iterable?.length;
    if (l === 0) {
      res([]);
      return;
    }

    let values = new Array();

    for (let i = 0; i < l; i++) {
      Promise.resolve(iterable[i]).then(
        (res) => {
          values[i] = res;
          if (values.length === l) {
            res(values);
          }
        },
        (error) => {
          rej(error);
        }
      );
    }
  });
}
