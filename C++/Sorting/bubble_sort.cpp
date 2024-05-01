#include <iostream>
using namespace std;

// Function to swap two elements using pointers
void swap(int *x, int *y)
{
    int temp = *x; // Temporary storage of the value at address x
    *x = *y;       // Assign the value at address y to address x
    *y = temp;     // Assign the value in temp (original x) to address y
}

// Implementation of the Bubble Sort algorithm
void BubbleSort(int array[], int size)
{
    int i, j;
    bool isSwapped;

    // Loop through all elements in the array
    for (i = 0; i < size - 1; i++)
    {
        isSwapped = false; // Flag to check if any swap happened

        // Inner loop to compare array elements
        for (j = 0; j < size - 1 - i; j++) // size-1-i, as the last i elements are already sorted
        {
            // If current element is greater than the next, swap them
            if (array[j] > array[j + 1])
            {
                swap(&array[j], &array[j + 1]);
                isSwapped = true; // Set the flag to true showing a swap occurred
            }
        }

        // If no two elements were swapped by inner loop, then the array is sorted
        if (isSwapped == false)
        {
            break; // Break out of the loop early
        }
    }
}

// Main function to run the Bubble Sort
int main()
{
    int arr[] = {2, 4, 3, 7, 6, 9}; // Array to be sorted
    int size = 6;                   // Number of elements in the array

    // Call the BubbleSort function
    BubbleSort(arr, size);

    // Printing the sorted array
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
