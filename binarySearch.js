//Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(arr, value){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end)/2);
    while(arr[middle]!== value && start < end) {
      if(value < arr[middle]) {
        end = middle-1;
      } else {
        start = middle+1
      }
      middle = Math.floor((start + end)/2);
    }
    return arr[middle] === value ? middle: -1
  }