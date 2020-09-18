// Time complexity:  O(N)
function slidingWindow(k, arr) {
  let maxSum = 0,
      windowSum = 0,
      windowStart = 0

  // Go through length of entire array once to save time!:   O(N)
  for (windowEnd = 0; windowEnd < arr.length - k + 1; windowEnd++) {
    windowSum += arr[windowEnd] // add the next element
    if (windowEnd >= k - 1) { // if at the end of the subarray
      maxSum = Math.max(maxSum, windowSum) // firstly, set maxSum if windowSum is greater
      windowSum -= arr[windowStart] // subtract element going out, if any
      windowStart += 1
    }
  }

  return maxSum
}

// Tests
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`)
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`)
