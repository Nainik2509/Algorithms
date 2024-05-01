/**
 * This file is part of [Algorithms]
 *
 * (c) 2024 [Nainik Mehta] <[nainikmehta25@gmail.com]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.quickSort
 * @description Quick Sort is a divide-and-conquer sorting algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted. This process continues until the entire array is sorted. It is a highly efficient sorting algorithm with an average time complexity of O(n log n).
 * @author [Nainik Mehta] <[https://www.linkedin.com/in/nainik-mehta-25nk12/]>
 * @github - Nainik2509  <[https://github.com/Nainik2509/]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: array with 0 or 1 elements is already sorted
  }

  const pivot = arr[0]; // Select the first element as the pivot
  const left = []; // Array to store elements less than the pivot
  const right = []; // Array to store elements greater than or equal to the pivot

  // Partition the array into left and right sub-arrays
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Add elements less than pivot to the left sub-array
    } else {
      right.push(arr[i]); // Add elements greater than or equal to pivot to the right sub-array
    }
  }

  // Recursively apply quickSort to the left and right sub-arrays, and concatenate them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const arr = [51, 45, 63, 71, 43, 23, 90];
console.log('Original Array:', arr);
const sortedArr = quickSort(arr);
console.log('Sorted Array:', sortedArr);

