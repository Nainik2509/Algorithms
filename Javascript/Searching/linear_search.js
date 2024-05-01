// Linear Search Algorithm in JavaScript

/**
 * This file is part of [Algorithms]
 *
 * (c) 2024 [Nainik Mehta] <[nainikmehta25@gmail.com]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.linearSearch
 * @description Linear search is a simple algorithm that checks each element in a list sequentially until the target value is found or the list ends.
 * @author [Nainik Mehta] <[https://www.linkedin.com/in/nainik-mehta-25nk12/]>
 * @github - Nainik2509  <[https://github.com/Nainik2509/]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

function linearSearch(arr, search) {
  // Function to perform linear search in an array

  for (let i = 0; i < arr.length; i++) {
    // Loop through each element in the array
    if (arr[i] === search) {
      // If the current element matches the search value
      return i; // Return the index of the element
    }
  }

  // If the element is not found after the loop
  return -1; // Return -1 to indicate element not found
}

// Example usage:
const array = [3, 1, 5, 7, 2];
const searchValue = 5;
const resultIndex = linearSearch(array, searchValue);

if (resultIndex !== -1) {
  console.log(`Element ${searchValue} found at index ${resultIndex}.`);
} else {
  console.log(`Element ${searchValue} not found in the array.`);
}

