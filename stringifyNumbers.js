//Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers(obj){
    let obj1 = {}
    for(let key in obj) {
      if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        obj1[key] = stringifyNumbers(obj[key]);
      }
      else if(typeof obj[key] === 'number')
         {
          obj1[key]  = obj[key].toString();
        }
      else {
        obj1[key] = obj[key]
      }
      }
    return obj1
  }
