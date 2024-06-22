function LRUCache(size) {
  this.size = size;
  this.internalCache = {};
}

LRUCache.prototype.add = function (key, value) {
  this.internalCache[key] = {
    value,
    timestamp: new Date().getTime(),
  };

  console.log("Item added successfully");

  if (Object.keys(this.internalCache).length > this.size) {
    // Need to evict the least recently used timestamp
    let max = -Infinity;
    let keyToEvict = null;

    for (let [key, value] of Object.entries(this.internalCache)) {
      const { timestamp } = value || {};
      const timeDiff = new Date().getTime() - timestamp;
      if (timeDiff > max) {
        max = timeDiff;
        keyToEvict = key;
      }
    }

    if (keyToEvict) {
      delete this.internalCache[keyToEvict];
    }
  }
};

LRUCache.prototype.get = function (key) {
  if (!this.internalCache[key]) {
    console.info("Item not found in cache");
    return;
  }

  return this.internalCache[key].value;
};

let cache = new LRUCache(2);
