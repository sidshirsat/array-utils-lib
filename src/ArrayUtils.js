// src/ArrayUtils.js
const ArrayUtils = {
    chunk: function(array, size) {
      if (!Array.isArray(array) || size <= 0) return [];
      let result = [];
      for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
      }
      return result;
    },
  
    compact: function(array) {
      if (!Array.isArray(array)) return [];
      return array.filter(Boolean);
    },
  
    flatten: function(array) {
      if (!Array.isArray(array)) return [];
      return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? this.flatten(val) : val), []);
    },
  
    unique: function(array) {
      if (!Array.isArray(array)) return [];
      return [...new Set(array)];
    },
  
    difference: function(array, ...arrays) {
      if (!Array.isArray(array)) return [];
      let otherValues = arrays.reduce((acc, arr) => acc.concat(arr), []);
      return array.filter(val => !otherValues.includes(val));
    },
  
    intersection: function(array1, array2) {
      if (!Array.isArray(array1) || !Array.isArray(array2)) return [];
      return array1.filter(value => array2.includes(value));
    }
  };
  
  module.exports = ArrayUtils;
  