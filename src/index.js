import { HashMap } from "./hashmap";

// const hashmap = new HashMap(16, 0.8)

// console.log(hashmap.hash("Hello"))

// hashmap.set("Cheese", "Yellow")
// hashmap.set("Cheese", "Grey")
// hashmap.set("Have", "Test")
// hashmap.set("Bet", "Hey")
// hashmap.set("Yellow", "Me")
// hashmap.set("Trash", "is you")

// console.log(hashmap.get("Cheese"))

// console.log(hashmap.has("Cheese"))
// console.log(hashmap.has("Cheeseys"))

// hashmap.remove("Trash")

// console.log(hashmap.length())

// console.log(hashmap.keys())
// console.log(hashmap.values())

// console.log(hashmap.entries())
// console.log(hashmap.buckets)

const test = new HashMap(16, 0.8);

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set('moon', 'silver')


console.log(test.buckets)

console.log(test.hash("grape"))
console.log(test.hash("hat"))