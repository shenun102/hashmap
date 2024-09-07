export class HashMap {
  constructor(initialCapacity, loadFactor) {
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.buckets = Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    // Initialize the bucket as an array if empty
    if (this.buckets[index] === null) {
      this.buckets[index] = [];
    }

    // Check if the key already exists and update it
    for (let i = 0; i < this.buckets[index].length; i++) {
      const [existingKey, existingValue] = this.buckets[index][i];
      if (existingKey === key) {
        this.buckets[index][i] = [key, value]; // Update value for existing key
        return;
      }
    }

    // Otherwise, add new key-value pair
    this.buckets[index].push([key, value]);

    // Optionally, implement logic to resize if load factor exceeds threshold
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket) {
      for (const [entryKey, value] of bucket) {
        if (entryKey === key) {
          return value;
        }
      }
    }
    return null; // Key not found
  }

  has(key) {
    const index = this.hash(key); // Compute the bucket index
    const bucket = this.buckets[index]; // Get the bucket at the computed index

    if (bucket) {
      // Check if the bucket is not null
      for (const [entryKey] of bucket) {
        // Iterate over key-value pairs in the bucket
        if (entryKey === key) {
          // Compare the key
          return true; // Key found
        }
      }
    }

    return false; // Key not found
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        const [entryKey] = bucket[i];
        if (entryKey === key) {
          bucket.splice(i, 1); // Remove the key-value pair
          return true;
        }
      }
    }

    return false; // Key not found
  }

  length() {
    let numOfStoredKeys = 0;
    this.buckets.forEach((bucket) => {
      if (bucket) {
        numOfStoredKeys += bucket.length;
      }
    });
    return numOfStoredKeys;
  }

  clear() {
    this.buckets.fill(null);
  }

  keys() {
    const keysArr = [];
    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((entry) => {
          const [key, value] = entry;
          keysArr.push(key);
        });
      }
    });
    return keysArr;
  }

  values() {
    const valuesArr = [];
    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((entry) => {
          const [key, value] = entry;
          valuesArr.push(value);
        });
      }
    });
    return valuesArr;
  }

  entries() {
    const entries = [];
    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((entry) => {
          entries.push(entry);
        });
      }
    });

    return entries;
  }
}
