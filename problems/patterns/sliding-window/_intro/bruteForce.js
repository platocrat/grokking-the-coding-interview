function findAvgsOfSubarrays(K, arr) {
  const result = []
  /** 
   * In words: 
   *  starting from the start of the array, loop through 
   *  the length of the array minus K (5) plus 1. 
   * 
   * Why arr.length - K + 1?
   *  If the given array is of size 9, then that means
   *  the array has values for indices 0 through 8.
   *  If we iterate through arr.length - K and K = 5,
   *  then we iterate through indices 0 < 3 because we
   *  go from indices 0 to indices < 4. This is not
   *  the subarray we want; we want to iterate through
   *  0 - 4, so we add 1 to K, giving us 
   *  arr.length - K + 1, or 9 - 5 + 1 = 4
   */
  for (let i = 0; i < arr.length - K; i++) {
    // find sum of next 'K' elements
    sum = 0.0
    /** 
     * Using the subarray outlined in the previous for
     * loop, start from the start of the array and 
     * loop through the entire length of the array
     */
    for (let j = i; j < i + K; j++) {
      // Add each value in array to sum
      sum += arr[j]
    }
    result.push(sum / K) // calculate average
  }

  return result
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
console.log(`Averages of subarrays of size K: ${result}`)
