// Implement a function called countUniqueValue, which accept a sorted array
// and count unique value in the array.         
const countUniqueValue = (arr) => {
    if(arr.length) {
        let i = 0;
        for(let j = 1; j < arr.length; j++){
            if(arr[i] != arr[j]){
               i++;
                arr[i] =arr[j]
            }
        }
        return i+1;
    }

    return 0;
  
}