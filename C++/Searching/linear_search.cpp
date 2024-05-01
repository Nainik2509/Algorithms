#include <stdio.h> // Correct the header file for standard input and output

int main()
{
    int arr[100]; // Array to hold up to 100 elements
    int search;   // Variable to hold the element to search for
    int i, n;     // Variables for looping and to store the size of the array

    printf("Enter the size of the array: \n");
    scanf("%d", &n); // Input the number of elements in the array

    printf("Enter the elements of the array: \n");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]); // Input each element of the array
    }

    printf("Enter the element you wish to search for: \n");
    scanf("%d", &search); // Input the element to search for

    for (i = 0; i < n; i++)
    {
        if (arr[i] == search) // Check if current array element matches the search value
        {
            printf("The element is found at position %d\n", i + 1); // Position is i + 1 because array index starts at 0
            return 0;                                               // Exit from main indicating successful execution
        }
    }
    // If we complete the loop without having found the element
    printf("Element not found in the array.\n");

    return 0; // Return from main indicating normal termination of the program
}
