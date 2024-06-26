//Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
function nestedEvenSum(obj, sum =0){
    for(let key in obj){
      if(typeof obj[key] == 'object') {
        sum += nestedEvenSum(obj[key])
      }
      else if(typeof obj[key] == 'number' && obj[key] % 2 == 0){
        sum+= obj[key]
      }
    }
    return sum;
  }