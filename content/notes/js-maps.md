---
external: false
draft: false
title: "JavaScript Maps/Dictionaries 🗺️"
description: "Written in Sem 1 2023"
date: 2024-07-23
---

Creating a dictionary in TypeScript efficiently depends on your specific use case, such as the type of keys and values you are dealing with and how you intend to use the dictionary. Here are a few common methods and their efficiencies:

### 1. Using Object Literals

This is the simplest and most common way to create a dictionary in TypeScript.

```typescript
const dictionary: { [key: string]: number } = {};
dictionary["one"] = 1;
dictionary["two"] = 2;
console.log(dictionary["one"]); // output: 1
console.log(dictionary["not a key"]); // output: undefined
```

| PROS ✅                               | CONS ❌                                                                                                          |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Simple, straightforward and efficient | Keys are limited to strings (or other datatypes/objects converted to strings), Does not strictly guarantee order |

- Use Case: When you want a performant map with simple syntax but

### 2. Using Map

The Map object is more versatile and can have keys of any type.

```typescript
const map = new Map<string, number>();
map.set("one", 1);
map.set("two", 2);
console.log(map.get("one")); // output: 1
console.log(map.get("not a key")); // output: undefined
```

| PROS ✅                                                                                                               | CONS ❌                                                                                 |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Allows for keys of any type, maintains the order of elements, Better performance for frequent additions and deletions | Slightly more complex syntax, Slightly more memory overhead compared to object literals |

- Use Case: When you need keys of any type or need to maintain the order of entries

### 3. Using ES6 Class

For more complex dictionaries with additional methods or properties, you can create a class.

```typescript
class Dictionary<T> {
  private items: { [key: string]: T } = {};

  set(key: string, value: T): void {
    this.items[key] = value;
  }

  get(key: string): T | undefined {
    return this.items[key];
  }

  has(key: string): boolean {
    return key in this.items;
  }

  delete(key: string): void {
    delete this.items[key];
  }
}

const dictionary = new Dictionary<number>();
dictionary.set("one", 1);
dictionary.set("two", 2);
console.log(map.get("one")); // output: 1
console.log(map.get("not a key")); // output: undefined)
```

| PROS ✅                                                 | CONS ❌                                                                             |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Allows for additional and custom methods and properties | More verbose syntax, Slightly more overhead compared to using plain objects or maps |

- Use Case: When you want to flex writing a map from scratch in a coding interview 🦾
  - If you need additional or custom methods and properties, you can extend or overwrite methods and props from the existing [[#2. Using Map]] class

# Performance Considerations 🌩️

- Object Literals: Generally fastest for basic key-value storage with string keys. Operations like insertion, deletion, and lookup are O(1).
- Map: Offers more flexibility with non-string keys and maintains insertion order. Slightly slower than object literals due to extra overhead but still O(1) for most operations.
- Custom Class: Adds encapsulation and flexibility but at the cost of some performance overhead due to method calls.

# Summary

- Use Object Literals if you need a simple and efficient dictionary with string keys.
- Use Map if you need keys of any type or need to maintain the order of entries.
- Use a Custom Class if you need to encapsulate dictionary logic and behavior with additional methods and properties.
