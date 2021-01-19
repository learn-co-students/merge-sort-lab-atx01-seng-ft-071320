function findMinAndRemoveSorted(array) {
    let min = array[0]
    array.shift()
    return min
}

function merge(s1, s2) {
    let sorted = []
    while (s1.length != 0 && s2.length != 0) {
        if (s1[0] < s2[0]) {
            sorted.push(findMinAndRemoveSorted(s1))
        } else {
            sorted.push(findMinAndRemoveSorted(s2))
        }
    }
    console.log(sorted)
    return sorted.concat(s1).concat(s2)
}

function mergeSort(uS) {
    let mid = uS.length / 2
    let first = uS.slice(0, mid)
    let second = uS.slice(mid, uS.length)
    let sorted;

    if (uS.length < 2) { return uS }
    else {
        sorted = merge(mergeSort(first), mergeSort(second))
    }
    return sorted
}