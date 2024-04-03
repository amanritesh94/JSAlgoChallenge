//Write a function called sameFrequency. Given two positive integers, 
//find out if the two numbers have the same frequency of digits.

function sameFrequency(num, num1){
    const st1 = num.toString();
    const st2 = num1.toString();
    const st1Obj = {};
    for(let item of st1) {
        st1Obj[item] = (st1Obj[item] || 0) +1
    }

    for(let item of st2) {
        if(!st1Obj[item]) {
            return false;
        } else {
            st1Obj[item] -= 1;
        }
    }

    return true;

    
}