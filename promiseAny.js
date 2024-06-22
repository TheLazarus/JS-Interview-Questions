function promiseAny(iterable) {
  return new Promise((res, rej) => {
    let itLength = iterable.length;

    if (itLength === 0) {
      rej(new AggregateError([]));
      return;
    }

    let pending = itLength;

    let ans = new Array(itLength);

    for (let i = 0; i < itLength; i++) {
      Promise.resolve(iterable[i])
        .then((data) => {
          res(data);
        })
        .catch((error) => {
          pending--;
          ans[i] = error;

          if (pending === 0) {
            rej(new AggregateError(ans));
          }
        });
    }
  });
}
