function merge(leftarr, rightarr) {
    let arr = [];
    let i = 0;
    let j = 0;
    while(i < leftarr.length && j < rightarr.length) {
        if(leftarr[i] < rightarr[j]) {
            arr.push(leftarr[i])
            i++;
        } else {
            arr.push(rightarr[j])
            j++;
        }
    }

    while(i < leftarr.length) {
        arr.push(leftarr[i]);
        i++
    }

    while(j < rightarr.length) {
        arr.push(rightarr[j]);
        j++;
    }

    return arr;
}

function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr
    }

    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right)

}