async function sleep(duration) {
  const sleepPromise = new Promise((res) => {
    setTimeout(() => {
      res();
    }, duration);
  });

  return sleepPromise;
}
