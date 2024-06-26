// Implement a function called, areThereDuplicates 
//which accepts a variable number of arguments, and checks whether
// there are any duplicates among the arguments passed in.  
//You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...arg) {
    const duplicateObj = {};
    for(let item of arg) {
        if(duplicateObj[item]) return true;

        duplicateObj[item] = (duplicateObj[item] || 0)+1;
    }

    return false;
}