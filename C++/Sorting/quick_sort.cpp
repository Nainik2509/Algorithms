#include <iostream>
using namespace std;

// Function to swap two elements
void swap(int *x, int *y)
{
    int temp;
    temp = *x;
    *x = *y;
    *y = temp;
}

// Function to partition the array
int partition(int arr[], int low, int high)
{
    int pivot = arr[low]; // Choosing the pivot element
    int i = low;          // Initialize the left pointer
    int j = high;         // Initialize the right pointer

    // Perform partitioning
    do
    {
        // Move the left pointer until an element greater than the pivot is found
        do
        {
            i++;
        } while (arr[i] <= pivot);

        // Move the right pointer until an element smaller than or equal to the pivot is found
        do
        {
            j--;
        } while (arr[j] > pivot);

        // Swap the elements if the left pointer is less than the right pointer
        if (i < j)
            swap(&arr[i], &arr[j]);
    } while (i < j);

    // Swap the pivot element with the element at the right pointer
    swap(&arr[j], &arr[low]);

    // Return the index of the pivot element
    return j;
}

// Function to perform Quick Sort
void QuickSort(int arr[], int low, int high)
{
    if (low < high)
    {
        // Partition the array
        int p = partition(arr, low, high);

        // Recursively sort the left and right subarrays
        QuickSort(arr, low, p);
        QuickSort(arr, p + 1, high);
    }
}

int main()
{
    // Input array
    int arr[] = {51, 45, 63, 71, 43, 23, 90};
    int n = sizeof(arr) / sizeof(arr[0]); // Calculate the size of the array
    QuickSort(arr, 0, n - 1);             // Perform Quick Sort
    int i;
    for (i = 0; i < n; i++)
    {
        cout << arr[i] << " "; // Print the sorted array
    }
}
