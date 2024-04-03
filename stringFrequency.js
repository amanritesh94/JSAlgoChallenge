// Function to return frequency of each character in string
const frequencyChar =(str)=> {
    let frequencyObj = {};
    for(let char of str) {
        frequencyObj[char] = frequencyObj[char] > 0 ? +frequencyObj[char]+1 : 1;
    }

    return frequencyObj;
}