// Function should return true if every element in the array  has its corrosponding
// value square in the second array. The frequency of value must be same.
const same = (arr1, arr2) => {
    if(arr1.length != arr2.length) return false;
    let arr1Obj = {};
    let arr2Obj = {};

    for(let item of arr1) {
        arr1Obj[item] = (arr1Obj[item] || 0) + 1;
    }

     for(let item of arr2) {
        arr2Obj[item] = (arr2Obj[item] || 0) +1;
    }

    for(let item in arr1Obj) {
        if(!(item ** 2) in arr2Obj){
            return false;
        }
    }

    for(let item in arr1Obj) {
        if(arr2Obj[item ** 2] != arr1Obj[item]) {
            return false;
        }
    }

    return true;
    
}