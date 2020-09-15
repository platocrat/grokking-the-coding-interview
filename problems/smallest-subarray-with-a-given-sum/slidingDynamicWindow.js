/**
 * Problem:  Smallest Subarray with a Given Sum
 * Difficulty: Easy
 */
// Time complexity:   O(N + N) ~= O(N)
// Space complexity:  constant space, O(1)
function smallestSubarrayWithGivenSum(s, arr) {
  let windowSum = 0,
      minLength = Infinity,
      windowStart = 0

  /*    Run through for loop once:        O(N)      */
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd] // add the next element

    /*    Run through while loop once:    O(N + N)  */
    // shrink the window as small as possible until `windowSum` is smaller than `s`
    while (windowSum >= s) {
      // plus 1 because `windowEnd` starts at 0
      minLength = Math.min(minLength, windowEnd - windowStart + 1)
      windowSum -= arr[windowStart] // subtract from sum element going out
      windowStart += 1 // shrink window by removing element going out
    }
  }

  if (minLength === Infinity) {
    return 0
  }
  return minLength
}

// Tests
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`)
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`)
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`)
