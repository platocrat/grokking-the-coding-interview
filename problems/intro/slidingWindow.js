function findAvgsOfSubarrays(K , arr) {
  const avgs = []
  let windowSum = 0.0, windowStart = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd] // add the next element
    /**
     * slide window once index 4 is reached, then slide at
     * every continguous index thereafter.
     */
    if (windowEnd >= K - 1) {
      avgs.push(windowSum / K) // calculate the average
      windowSum -= arr[windowStart] // subtract element going out
      windowStart += 1 // slide the window ahread
    }
  }

  return avgs
}

const avgs = findAvgsOfSubarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
console.log(`Averages of subarrays of size K: ${result}`)
