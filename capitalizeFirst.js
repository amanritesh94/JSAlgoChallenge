//Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
function capitalizeFirst (arr) {
    if (arr.length === 1) {
     return [arr[0][0].toUpperCase() + arr[0].substr(1)];
   }
   
       let res = capitalizeFirst(arr.slice(0, -1));
       let str = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substr(1);
       res.push(str);
   
 
   return res;
 }