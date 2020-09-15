/**
 * @dev 
 *     Maximum Sum Subarray of Size K (easy)
 *     
 *     Given an array of positive numbers and a
 *     positive number ‘k’, find the maximum 
 *     sum of any contiguous subarray of size ‘k’.
 */
// Time complexity:  O(N * K)
function bruteForce(k, arr) {
  let maxSum = 0,
      windowSum = 0

  // Go through length of subarrays:  O(K)
  for (i = 0; i < arr.length - k + 1; i++) {
    windowSum = 0
    // Go through entire length of array:  O(N * K)
    for (j = i; j < i + k; j++) {
      windowSum += arr[j]
    }
    maxSum = Math.sum(maxSum, windowSum)
  }

  return maxSum
}

// Tests
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`)
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`)
