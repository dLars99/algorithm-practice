const test = [0, 1, 21, 33, 45, 45, 65, 71, 72, 73]

function binarysearch(array, target) {
    let left = 0
    let right = array.length - 1
    while (left !== right) {
        let middle = Math.floor((left + right) / 2)
        if (array[middle] < target) {
            left = middle + 1
        } else if (array[middle] > target) {
            right = middle - 1
        }
    }

    return array[left]
}

console.log(binarysearch(test, 33))