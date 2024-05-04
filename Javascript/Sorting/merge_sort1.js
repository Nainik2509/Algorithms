/**
 * This file is part of [Algorithms]
 *
 * (c) 2024 [Nainik Mehta] <[nainikmehta25@gmail.com]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.mergeSort
 * @description Merge Sort is a divide-and-conquer algorithm that divides the array into two halves, sorts each half, and then merges them. It is a highly efficient sorting algorithm with an average time complexity of O(n log n).
 * @author [Nainik Mehta] <[https://www.linkedin.com/in/nainik-mehta-25nk12/]>
 * @github - Nainik2509  <[https://github.com/Nainik2509/]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */
// Merge two sorted subarrays arr[left..mid] and arr[mid+1..right]
function merge(leftArr, rightArr) {
  const sortedArr = [];
  // Merge two sorted arrays into a larger sorted array
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  // Concatenate the rest of the remaining elements in leftArr or rightArr
  return [...sortedArr, ...leftArr, ...rightArr];
}

// Perform merge sort on the array
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr; // An array of less than two elements is already sorted.
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid); // Splitting the left half
  const rightArr = arr.slice(mid); // Splitting the right half

  return merge(mergeSort(leftArr), mergeSort(rightArr)); // Recursively sort and merge both halves
}

// Example usage
let arr = [12, 11, 13, 5, 6, 7];
console.log('Original array:', arr);

let sortedArr = mergeSort(arr); // Sort the array and receive the sorted array
console.log('Sorted array:', sortedArr);

