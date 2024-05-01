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
function merge(arr, left, mid, right) {
  let n1 = mid - left + 1; // Size of left subarray
  let n2 = right - mid; // Size of right subarray

  // Create temporary arrays to store the left and right subarrays
  let L = arr.slice(left, mid + 1);
  let R = arr.slice(mid + 1, right + 1);

  // Merge the temporary arrays back into arr[left..right]
  let i = 0,
    j = 0,
    k = left;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of L[], if any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of R[], if any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

// Perform merge sort on the array arr[left..right]
function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2); // Find the middle index
    mergeSort(arr, left, mid); // Recursively sort the left subarray
    mergeSort(arr, mid + 1, right); // Recursively sort the right subarray
    merge(arr, left, mid, right); // Merge the sorted subarrays
  }
}

// Example usage
let arr = [12, 11, 13, 5, 6, 7];

console.log('Original array:', arr);
mergeSort(arr, 0, arr.length - 1);
console.log('Sorted array:', arr);

