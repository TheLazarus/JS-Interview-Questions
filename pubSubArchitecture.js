class PubSub {
  constructor() {
    this.subscribers = [];
  }
  addSubscriber(callback) {
    if (typeof callback !== "function") {
      throw new TypeError("Expected a function");
    }
    this.subscribers.push(callback);
    return () => {
      this.#removeSubscriber(callback);
    };
  }
  #removeSubscriber(callback) {
    if (typeof callback !== "function") {
      throw new TypeError("Expected a function");
    }
    this.subscribers = this.subscribers.filter((sub) => sub !== callback);
  }
  publish(message) {
    this.subscribers.forEach((subscriber) => {
      subscriber(message);
    });
  }
}




const pubsub = new PubSub();

const sub1 = (message) => {
  console.log(`Sub1 has received the message - ${message}`);
};

const sub2 = (message) => {
  console.log(`Sub2 has received the message - ${message}`);
};

const unsub1 = pubsub.addSubscriber(sub1);
const unsub2 = pubsub.addSubscriber(sub2);
