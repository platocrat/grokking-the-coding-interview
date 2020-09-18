/**
 * @dev 
 *     Problem:   
 *      
 *        -  Given an array of characters where each character represents a
 *           fruit tree, you are given two baskets and your goal is to put
 *           maximum number of fruits in each basket. The only restriction
 *           is that each basket can have only one type of fruit.
 *
 *        -  You can start with any tree, but once you have started you
 *           can’t skip a tree. You will pick one fruit from each tree 
 *           until you cannot, i.e., you will stop when you have to pick 
 *           from a third fruit type.
 *          
 *        -  Write a function to return the maximum number of fruits in 
 *           both the baskets.
 * 
 *     Difficulty:         (medium) 
 *        
 *        -  This problem is actually very similar to the
 *           longest-substring-with-k-distinct-characters problem.
 *           Actually, it is a reworded version of the same problem!
 *           We need to find the length of the longest subarray
 *           with no more than two distinct characters (or fruit types!).
 *           This transforms the current problem into a Longest
 *           Substring with K Distinct Characters where K = 2.
 *     
 *     Time Complexity:    O(N), where 'N' is the number of characters
 *                         in the input array.
 *          
 *           -  Outer for loop runs through all characters and the inner
 *              while loop processes each character once, therefore the 
 *              time complexity of the algorithm will be O(N + N), which
 *              is asymptotically equivalent to O(N).
 *
 *     Space Complexity:   O(1)
 *                
 *           -  There can only be a maximum of three types of fruits
 *              stored in the HashMap. This reduces to a constant of 1
 *              since the first derivative (or rate of change) of any
 *              constant variable is 1.    
 */
function fruitsIntoBaskets(fruits) {
  let fruitFrequency = {},
      windowStart = 0,
      maxLength = 0

  /*     Run through entire array once:       O(N)    */
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rigthFruit = fruits[windowEnd]      // assign (or set) first element

    if (!(rightFruit in fruitFrequency)) {    // add key for first element to HashMap
      fruitFrequency[rightFruit] = 0
    }
    fruitFrequency[rightFruit] += 1           // increment element count in HashMap

    /*   Process each index in array once:    O(N + N)    */
    while (Object.keys(fruitFrequency).length > 2) {
      const leftFruit = fruits[windowStart]   // assign (or set) leftmost element
      fruitFrequency[leftFruit] -= 1          // mark leftmost element for removal
      
      if (fruitFrequency[leftFruit] === 0) {
	delete fruitFrequency[leftFruit]
      }
      windowStart += 1                        // shrink the window
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }

  return maxLength
}


// Test cases
console.log(`Max number of fruit trees is ${fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C'])}`)
console.log(`Max number of fruit trees is ${fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C'])}`)
