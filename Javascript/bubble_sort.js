/**
 * This file is part of [Algorithms]
 *
 * (c) 2024 [Nainik Mehta] <[nainikmehta25@gmail.com]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.bubbleSort
 * @description Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order, and efficiently identifies the sorted elements with each successive pass through the list.
 * @author [Nainik Mehta] <[https://www.linkedin.com/in/nainik-mehta-25nk12/]>
 * @github - Nainik2509  <[https://github.com/Nainik2509/]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

function bubbleSort(arr) {
  let len = arr.length; // Get the number of elements in the array
  let swapped;

  do {
    swapped = false; // This flag will monitor whether elements were swapped during the pass

    for (let i = 0; i < len - 1; i++) {
      // Loop through the array up to the second to last element
      if (arr[i] > arr[i + 1]) {
        // Compare current element to the next one
        // If the current element is greater, swap them
        [[arr[i], arr[i + 1]]] = [[arr[i + 1], arr[i]]];
        swapped = true; // Set the swapped flag to true indicating a swap occurred
      }
    }
    // Continue the outer loop until no swaps are made on a new pass, indicating the array is sorted
  } while (swapped);

  return arr; // Return the sorted array
}

// Example usage
console.log(bubbleSort([1, 4, 2, 3, 5, 75, 3])); // Output will be the sorted array

