/**
 * @dev 
 *     Problem:   
 *      
 *        -  Given an array containing 0s and 1s, if you
 *           are allowed to replace no more than ‘k’ 0s with
 *           1s, find the length of the longest contiguous 
 *           subarray having all 1s.
 * 
 *     Difficulty:         (hard) 
 *        
 *        -  Another problem very similar to the Longest
 *           Substring with same Letters after Replacement
 *           problem, where this problem only has two chars
 *           in the input array. 
 *
 *
 *     Time Complexity:    O(N), where 'N' is the count of numbers
 *                         in the input array.
 *
 *     Space Complexity:   O(1), can only be max of k 0s, and the
 *                               first derivative of a constant
 *                               variable is 1.
 */
/*      Run through entire array once:    O(N)     */
// My implementation using the same method as previous similar problems.
const myLengthOfLongestSubstring = function(arr, k) {
  let maxLength = 0,
      windowStart = 0,
      bitFrequency = {}

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const rightBit = arr[windowEnd]            // assign first element

    if (!(rightBit in bitFrequency)) {
      bitFrequency['' + rightBit] = 0               // add first element to hashmap
    }
    bitFrequency['' + rightBit] += 1                // increment frequency of element

    while (bitFrequency['0'] > k) {
      const leftBit = arr[windowStart]
      bitFrequency[leftBit] -= 1

      if (bitFrequency[leftBit] === 0) {
        delete bitFrequency[leftBit]
      }
      windowStart += 1
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }

  return maxLength
}


// Grokking's optimized implementation (much less code)
function lengthOfLongestSubstring(arr, k) {
  let maxLength = 0,
      windowStart = 0,
      maxOnesCount = 0

  /*    Run through and process each element once:    O(N)    */
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) {
      maxOnesCount += 1               // count all 1s
    }

    // if number of 0s in `arr` > k ... 
    if (windowEnd - windowStart + 1 - maxOnesCount > k) {
      if (arr[windowStart] === 1) {   // if leftmost element in window is 1 ...
	maxOnesCount -= 1             // substract 1 going out
      }
      windowStart += 1                // shrink window
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }

  return maxLength
}
