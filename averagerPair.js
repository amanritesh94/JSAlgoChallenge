//Write a function called averagePair. Given a sorted array of integers 
//and a target average, determine if there is a pair of values in the array 
//where the average of the pair equals the target average. There may be more than 
//one pair that matches the average target.

function averagePair(arr, num){
    let i = 0
   for(let j = 0; j < arr.length; j++){
       if(arr[1]+ arr[j] / 2 === num) {
           return true
       }
   }
   return false;
}