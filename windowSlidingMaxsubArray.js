// Write a function called maxSubarray which accepts an array
// of integer and a number called n. The function should calculate 
// the maximum sum of n consecutive element in array.
//maxSubarraySum([100,200,300,400], 2) // 700
const maxSubArry = (arr, num) => {
    if(num > arr.length) {
        return null;
    }
    let max = 0;
    for(let i= 0; i< arr.length - num +1; i++) {
       let temp = 0
        for(let j = 0; j < num; j++) {
           temp += arr[i+j] ;
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}

// Refactor 

[1,2,3,3,3,4,5,5,5]

const maxSubArraySum = (arr, num) => {
    if(num > arr.length) {
        return null
    };
    let maxsum = 0;
    let tempmax = 0;

    for(let i = 0; i< num; i++){
        maxsum += arr[i]
    }
    tempmax = maxsum
    for(let i = num; i< arr.length; i++) {
        tempmax = tempmax  - arr[i-num] + arr[i];
        maxsum = Math.max(tempmax, maxsum);
    }

    return maxsum
}