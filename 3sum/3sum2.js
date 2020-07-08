const nums = [-1, 0, 1, 2, -1, -4]

var threeSum = function (nums) {
    // const removeDupes = [...new Set(nums)]
    let answer = [];
    nums.sort((a, b) => a - b)
    for (i = 0; i < nums.length - 2; i++) {
        let currentSum;
        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;
        while (leftPointer < rightPointer) {
            currentSum = nums[i] + nums[leftPointer] + nums[rightPointer]
            if (currentSum === 0) {
                answer.push([nums[i], nums[leftPointer], nums[rightPointer]])
                leftPointer++
                rightPointer--
            } else if (currentSum > 0) {
                rightPointer--
            } else if (currentSum < 0) {
                leftPointer++
            }
        }

    }
 
    const finalAnswer = Array.from(new Set(answer.map(JSON.stringify)), JSON.parse)

    return finalAnswer;
};