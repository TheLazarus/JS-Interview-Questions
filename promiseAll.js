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

(async function () {
  const p1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 10);
  });

  const ans = await Promise.all([Promise.resolve(2), p1]);
  console.log(ans);
})();
