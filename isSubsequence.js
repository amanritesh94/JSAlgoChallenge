/* Write a function called isSubsequence which 
takes in two strings and checks whether the characters in the first string 
form a subsequence of the characters in the second string. In other words, 
the function should check whether the characters in the first string appear 
somewhere in the second string, without their order changing.
*/

function subsequence(str, str1){
    let i = 0;
     let j = 0;
      if (!str1) return true;
     while(j< str1.length) {
         if(str[i] === str1[j]) i++;
         if(i === str.length) return true;
         j++
     }
 
     return false;
 }