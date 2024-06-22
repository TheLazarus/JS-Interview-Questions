function LRUCache(size) {
  this.size = size;
  this.cache = new Map();
}

LRUCache.prototype.get = function (key) {
  let val = this.cache.get(key);
  if (val === undefined) return -1;

  this.cache.delete(key);
  this.cache.set(key, val);

  return val;
};

LRUCache.prototype.set = function (key, value) {
  this.cache.delete(key);

  if (this.cache.size === this.capacity) {
    this.cache.delete(this.cache.keys().next().value);
  }
  this.cache.set(key, value);
};
