//Write a recursive function called isPalindrome which returns true if the string 
//passed to it is a palindrome (reads the same forward and backward). 
//Otherwise it returns false.

function isPalindrome (str) {
    function reverse(str){
   if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0] 
 }
    const res = reverse(str);
    return str === res;
 }