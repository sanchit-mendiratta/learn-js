- Given an array A[] and a number x, check for pair in A[] with sum as x. A[] can have +ive and -ive Integers.
- Given 2 arrays find if both of them contain any common items. Return true/false.

```
function compareArrays(arr1, arr2) {
  let hashMap = {};
  arr1.forEach(el => hashMap[el] = true);
  arr2.forEach((el, index) => {
    if(hashMap[el]) {
      console.log(el + " found at index: " + index);
    }
  });
}

function compareArraysJS(arr1, arr2) {
  return arr1.some(el => arr2.includes(el));
}

let arr1 = [23, 45, 67, 21, 77, 2, 17, 345, null];
let arr2 = [56, 34, 77, 67, 1, 96, 49, 19, null];
console.log(arr1);
console.log(arr2);
console.log(compareArrays(arr1, arr2));
console.log(compareArraysJS(arr1, arr2));
```
- Given a string, find the length of the longest substring without repeating characters.

```

```
