---
external: false
draft: false
title: "JavaScript Loops 🔄"
description: "The 7 ways to create loops in JS - their pros, cons, use cases and performance"
date: 2024-07-22
---

In JavaScript (and TypeScript), you can use several looping constructs, including `forEach` and `map`, as well as traditional loops like `for...in`, `for...of`, and `while` loops. Here's a brief overview of each:

### 1. forEach

`forEach` is a method available on arrays that allows you to execute a provided function once for each array element.

```typescript
const array = [1, 2, 3];
array.forEach((element) => {
  console.log(element);
});
```

| PROS ✅              | CONS ❌                                                                              |
| -------------------- | ------------------------------------------------------------------------------------ |
| easy to read nad use | slower than traditional loops because it involves a function call for each iteration |

- Use Case: When you need to iterate over an array and perform **side effects** but **don't** need to **break** out of the loop early

{% toast type="col-detail" summary="Why do function calls take longer?" %}

Function calls generally take longer than inline operations due to several reasons:

1. Function Call Overhead
   - Each time a function is called, the JavaScript engine needs to perform additional work, including:
     - setting up the function call stack
     - passing arguments
     - returning a value
   - This setup and tearown adds overhead.
2. Context Switching
   - When a function is called, the execution context switches to that function, which incolves creating a new execution context and then switching back to the calling context once the function execution is complete.
3. Memory Allocation
   - Each function call typically involves some memory allocation for the function's:
     - local variables
     - arguments
     - return address
   - This can increase the memory management workload.
4. Variable Scope Resolution
   - Inside the function, the engine must resolve variables in the function's scope, which can add time compared to accessing variables directly in the current scope.

#### Example: Inline vs. Function Call

- Inline Operation

  ```typescript
  const array = [1, 2, 3];
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
  }
  ```

  - Here, the operation array[i] += 1 is done directly within the loop, minimizing overhead.

- Function Call
  ```typescript
  const array = [1, 2, 3];
  array.forEach((element) => {
    element += 1;
  });
  ```
  - In this case, forEach is a function that calls a callback function on each element. Each function call incurs additional overhead.

#### Performance Impact

- For small datasets or simple operations, the difference might be negligible.
- For large datasets or performance-critical applications, the overhead of function calls can become noticeable, and inline operations may be preferred for their efficiency.

{% /toast %}

### 2. map

`map` is a method available on arrays that creates a new array populated with the results of calling a provided function on every element in the calling array.

```typescript
const array = [1, 2, 3];
const doubled = array.map((element) => element * 2);
console.log(doubled); // [2, 4, 6]
```

| PROS ✅                                          | CONS ❌                                                                                                                 |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| returns a new array, great for transforming data | similar performance to `forEach`,, usually slower than traditional loops due to function calls and creating a new array |

- Use Case: When you need to **create a new array** based on the transformation of each element in the existing array

### 3. for...in

`for...in` loops over the enumerable properties of an object.

```typescript
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    console.log(`${key}: ${object[key]}`);
  }
}
```

| PROS ✅                                     | CONS ❌                                                                                    |
| ------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Useful for iterating over objetc properties | Generally slower because it enumerates all enumerable properties, including inherited ones |

- Use Case: When you need to iterate over the **keys** of an object

### 4. for...of

`for...of` iterates over iterable objects like arrays, strings, maps, sets, etc.

```typescript
const array = [1, 2, 3];
for (const element of array) {
  console.log(element);
}
```

| PROS ✅                                                                                  | CONS ❌                                                                                    |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Cleaner syntax for iterating over arrays, strings, maps, sets and other iterable objects | Slightly slower than traditional `for` loops due to additional iterator protocol overhead. |

- Use Case: When you need to iterate over the values of an iterable object and like the cleaner syntax

### 5. while

`while` creates a loop that executes as long as a specified condition is true.

```typescript
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

| PROS ✅                                                                                             | CONS ❌                                                                   |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Has a more flexible condition and does not neccessarily require to iterate over an interable object | More verbose and error-prone if not managed carefully (infinite loops 😵) |

- Use Case: When you need to perform an operation repeatedly based on a condition

### 6. do...while

`do...while` creates a loop that executes at least once and then repeats as long as a **specified condition** is true.

```typescript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
```

| PROS ✅                                                  | CONS ❌                                                             |
| -------------------------------------------------------- | ------------------------------------------------------------------- |
| Similar to `while` but guarantees at least one iteration | Same as `while`, error-prone and verbose for simple iterative loops |

- Use Case: When you need to ensure that the loop runs **at least once** regardless of the condition

### 7. Traditional for loop

```typescript
for (let i = 0; i < array.length; i++) {
  console.log(i);
}
```

| PROS ✅                                                           | CONS ❌                                                                                      |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| typically the fastest for array iteration due to minimal overhead | More verbose and can be less readable than higher-level abstractions like `forEach` or `map` |

- Use Case: When **performance is critical** and you are iterating over an array or have a fixed number of iterations

# Performance 🌩️

In general, traditional `for` loops tend to be the fastest for array iteration due to minimal overhead. `for...of` loops provide a good balance between performance and readability. `forEach` and `map` offer better readability and functional programming paradigms but usually come with a performance cost due to the function calls involved.

# Conclusion

While performance can vary based on the specific JavaScript engine and context, traditional `for` loops are generally the fastest for array iteration. However, readability and maintainability are also important factors, so choose the loop construct that best fits your needs and balances performance with code clarity.
