async function promiseRace(iterable) {
  return new Promise((res, rej) => {
    if (iterable?.length === 0) {
      return;
    }

    iterable.forEach((element) => Promise.resolve(element).then(res, rej));
  });
}
