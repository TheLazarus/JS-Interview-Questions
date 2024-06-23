// Kinda like a very basic imp

function EventEmitter() {
  this.eventSubscribers = new Map();
}

EventEmitter.prototype.on = function (eventName, listener) {
  if (typeof listener !== "function") {
    throw new TypeError(`Expected a function, instead got ${typeof listener}`);
  }

  const eventSubscribers = this.eventSubscribers.get(eventName);
  const newSubscribers =
    eventSubscribers === undefined
      ? [listener]
      : [...eventSubscribers, listener];

  this.eventSubscribers.set(eventName, newSubscribers);
};

EventEmitter.prototype.off = function (eventName, listener) {
  const eventSubscribers = this.eventSubscribers.get(eventName);
  if (eventSubscribers === undefined) return;

  const newSubscribers = eventSubscribers.filter((sub) => sub !== listener);

  this.eventSubscribers.set(eventName, newSubscribers);
};

EventEmitter.prototype.emit = function (eventName, ...args) {
  const eventSubscribers = this.eventSubscribers.get(eventName);
  if (eventSubscribers === undefined) return;

  eventSubscribers.forEach((sub) => {
    sub.call(this, ...args);
  });
};
