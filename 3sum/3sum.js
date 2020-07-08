const array = [12, 3, 1, 2, -6, 5, -8, 6]
const target = 0

let sumArray = []
let sumCount = 0

// Find triplets that match the target sum
for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
        for (let k = array.length - 1; k >j; k--) {
            if (array[i] + array[j] + array[k] === target) {
                sumArray.push([array[i], array[j], array[k]])
                sumCount++
            }
        }
    }
}

// Sort the resulting multidimensional array
if (sumCount === 0) {
    sumArray.push(0)
    console.log(sumArray)
} else {
    sumArray.forEach(targetSum => {
        targetSum.sort((a, b) => b - a)
    })
    // .sort((a, b), b - a)
}

console.log(sumArray)


// Solution
// 1. Sort array ascending
// 1.5 Outer for loop, i < length - 2
// 2. Left pointer at array[1]
// 3. Right pointer at array[length-1 (end)]
// 3.5 While left < right
// Current sum = outer loop + left pointer + right pointer
// 4. If sum < target, left ++
// 5. If sum > target, right--
// 6. If sum === target, left ++ and right--
