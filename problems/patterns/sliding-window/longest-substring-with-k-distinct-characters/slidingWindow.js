/**
 * @dev
 *     Problem:           Given a string, find the length of the 
 *                        longest substring in it with no more 
 *                        than K distinct characters.
 *
 *     Difficulty:        (medium)
 *    
 *     Time complexity:   O(N), where 'N' is the number of
 *                        chars in the input string.
 *                        
 *                        Note:  O(N + N) is asympotically 
 *                        equivalent to O(N), so its O(N)
 *     
 *     Space complexity:  O(K), as we will be storing a
 *                        max of 'K + 1' chars in the
 *                        HashMap                      
 */
function longestSubstringWithKDistinct(str, k) {
  let maxLength = 0,
      windowStart = 0,
      charFrequency = 0

  /*    Run through array of chars once:    O(N)    */
  // in the following loop we'll try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // `rightChar` points to a new char in `str[windowEnd]`
    const rightChar = str[windowEnd]     // make `rightChar` point to char in `str`
    if (!(rightChar in charFrequency)) { 
      charFrequency[rightChar] = 0       // set freq of char to 0 if not already in HashMap
    }

    /**
     * @dev
     *     Here, in the `charFrequency` HashMap, we know that for
     *     each new `rightChar` constant variable, `rightChar`
     *     will point to a new char in `str`.
     * 
     *     Effectively, we increment the char freq of each new char 
     *     that is pointed to by 1.
     *     
     *     This results in a HashMap that stores the freq for
     *     each char in `str` as we run through its indices.
     */
    charFrequency[rightChar] += 1        // increase charFreq of `rightChar` that is pointed to by 1
    
    /** 
     * console.log(charFrequency) --> you will see that 
     *                                charFreq stores each 
     *                                rightChar as an object 
     *                                key
     */
    /*    Process each char once:          O(N + N)     */
    // shrink the sliding window, until we are left with 'k' distinct characters in charFrequency
    while (Object.keys(charFrequency).length > k) {  // recall that `Object.keys()` or `Object.values()` returns an array
      const leftChar = str[windowStart]  // set the char that is going out
      charFrequency[leftChar] -= -1      // mark char for removal
      if (charFrequency[leftChar] === 0) {
	delete charFrequency[leftChar]   // use `delete` operator to remove this char property from HashMap
      }
      windowStart += 1 // shrink the window
    }
    // remember the max length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }

  return maxLength
}

// Test cases
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`)
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`)
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`)
