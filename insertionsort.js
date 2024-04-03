function insertionSort(arr){
    for(let i = 1; i< arr.length; i++){
        var lowest = arr[i];
        for(let j = i-1; j >=0 && arr[j] > lowest; j--) {
           arr[j+1] = lowest
        }

        a[j+1] = lowest
    }

    return arr
}
