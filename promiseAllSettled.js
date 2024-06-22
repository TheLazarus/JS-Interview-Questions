function promiseAllSettled(iterable) {
  return new Promise((res) => {
    let iterableLength = iterable.length;
    if (iterableLength === 0) {
      res([]);
      return;
    }

    let ans = [];

    function isEverythingSettled(ans, iterableLength) {
      for (let i = 0; i < iterableLength; i++) {
        if (!Object.hasOwn(ans, i)) {
          return false;
        }
      }
      return true;
    }

    for (let i = 0; i < iterableLength; i++) {
      Promise.resolve(iterable[i])
        .then(
          (data) => {
            ans[i] = { status: "fulfilled", value: data };
          },
          (error) => {
            ans[i] = { status: "rejected", reason: error };
          }
        )
        .finally(() => {
          if (isEverythingSettled(ans, iterableLength)) {
            res(ans);
          }
        });
    }
  });
}
