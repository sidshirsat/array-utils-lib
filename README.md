# Array Utils Lib

A simple utility library for common array operations.

## Installation

To install the library, run the following command:

```bash
npm install array-utils-lib
```

## Usage 

```javascript
const ArrayUtils = require('array-utils-lib');

// Example: Splitting an array into chunks
let chunkedArray = ArrayUtils.chunk([1, 2, 3, 4, 5], 2);
console.log(chunkedArray); // Output: [[1, 2], [3, 4], [5]]

// Example: Removing falsy values from an array
let compactedArray = ArrayUtils.compact([0, 1, false, 2, '', 3]);
console.log(compactedArray); // Output: [1, 2, 3]
```

## API
```javascript
chunk(array, size) - Splits an array into chunks.
compact(array) - Removes falsy values from an array.
flatten(array) - Flattens nested arrays.
unique(array) - Returns a new array with unique elements.
difference(array, ...arrays) - Returns elements from the first array that are not in the others.
intersection(array1, array2) - Returns the intersection of two arrays.
```