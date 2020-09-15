# Intro problem
## Manipulating subarrays (or sublists)
In many problems dealing with an array (or a LinkedList), we are asked to find or calculate something among all the contiguous subarrays (or sublists) of a given size. For example, take a look at this problem:

> Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

## Brute force algorithm
See `bruteForce.js` for the implementation.

### Time complexity
Since for every element of the input array, we are computing the sum of its _next_ 'K' elements, the time complexity of the above algorithm will be _O(N * K)_ where 'N' is the number of elements in the input array, and 'K' is the number of elements in the subarray.

This brute force method is inefficient because of the overlapping subarrays. 
> For any two consecutive subarrays of size '5', the overlapping part (which will contain four elements) will be evaluated twice.


## Sliding window algorithm (reusing the `sum` of subarrays)
See `slidingWindow.js` for the implementation.

### Time Complexity
The efficient way to solve this problem is to visualize each continguous subarray as a sliding window of '5' elements. This means that when we move on to the next subarray, we will slide the window by one element. So, to reuse the `sum` from the previous subarray, we will subtract the element going out of the window, and add the element now being included in sliding window; this will save us from going through the whole array to find the `sum`, and, as a result, the algorithm complexity will reduce to _O(N)_.
