//Function to determine if the second string is an anagram of the first.
const anagram = (str1, str2) => {
    if(str1.length != str2.length) return false;
    let str1Obj = {};
    let str2Obj = {};

    for(let item of str1) {
        str1Obj[item] = (str1Obj[item] || 0 ) +1
    }

     for(let item of str2) {
        str2Obj[item] = (str2Obj[item] || 0 ) +1
    }

    for(let item in str1Obj) {
        if(!item  in str2Obj){
            return false;
        }
    }

    for(let item in str1Obj) {
        if(str2Obj[item] != str1Obj[item]) {
            return false;
        }
    }

    return true;
    
}

// Optimise code

const anagramString = (str1, str2) => {
    if(str1.length != str2.length) return false;
    let str1Obj = {};

    for(let item of str1) {
        str1Obj[item] = (str1Obj[item] || 0 ) +1
    }

     for(let item of str2) {
        if(!str1Obj[item]) {
            return false;
        } else {
            str1Obj[item] -=1;
        }
    }

    return true;
    
}