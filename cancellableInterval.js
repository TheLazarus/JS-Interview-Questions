function setCancellableInterval(callback, delay, ...args) {
  let timerId = setInterval(callback, delay, ...args);
  return () => {
    clearInterval(timerId);
  };
}
