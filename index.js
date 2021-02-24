function findMinAndRemoveSorted(array) {
    let min = array.shift();
    return min;
}

function merge(firstArr, secondArr) {
    let mergedArray = [];
    while (firstArr.length != 0 && secondArr.length != 0) {
        firstArr[0] < secondArr[0] ? mergedArray.push(findMinAndRemoveSorted(firstArr)) : mergedArray.push(findMinAndRemoveSorted(secondArr));
    }
    return mergedArray.concat(firstArr).concat(secondArr);
}

function mergeSort(array) {
    let mid = array.length / 2,
        firstHalf = array.slice(0, mid),
        secondHalf = array.slice(mid, array.length);

    if (array.length < 2) {
        return array
    }
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}