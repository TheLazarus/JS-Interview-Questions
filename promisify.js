function promisify(func) {
  return function (...args) {
    return new Promise((res, rej) => {
      func.call(this, ...args, (err, data) => {
        return err ? rej(err) : res(data);
      });
    });
  };
}
