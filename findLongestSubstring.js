//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring 
//with all distinct characters.

//findLongestSubstring('rithmschool') // 7
//findLongestSubstring('thisisawesome') // 6

const findLongestSubstring = (str) => {
    let longest = 0;
    let seen = {};
    let start = 0;
    for(let i = 0; i< str.length; i++){
        let char = str[i];
        if(seen[char]) {
            start = Math.max(longest, seen[char]) // 10
        }
        longest = Math.max(longest, i-start + 1);
        seen[char] = i+1; // 9
    }
    return longest;
}



// Check if Promise constructor is available

    window.Promise = function (executor) {
      let resolveFn = null;
      let rejectFn = null;
      let settled = false;
  
      const settle = (status, value) => {
        if (settled) return;
        settled = true;
  
        setTimeout(() => {
          if (status === 'resolved') {
            resolveFn(value);
          } else if (status === 'rejected') {
            rejectFn(value);
          }
        }, 0);
      };
  
      const resolve = (value) => {
        settle('resolved', value);
      };
  
      const reject = (reason) => {
        settle('rejected', reason);
      };
  
      executor(resolve, reject);
  
      return {
        then: (onResolve, onReject) => {
          resolveFn = onResolve;
          rejectFn = onReject;
        },
      };
    };

  
  // Example usage of the Promise polyfill
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(randomNumber);
      } else {
        reject('Random number is less than 0.5');
      }
    }, 1000);
  });
  
  promise.then(
    (value) => {
      console.log('Resolved:', value);
    },
    (reason) => {
      console.log('Rejected:', reason);
    }
  );




  window.MyPromise = function(executor) {
    let resolveFn = null;
    let rejectFn = null;
    let setteled = false;
  
    const settele = function(status, value) {
      if (setteled) return;
  
      setteled = true
  
      setTimeout(() => {
        if (status == 'resolved') {
          resolveFn(value)
        } else if (status == 'rejected') {
          rejectFn(value)
        }
      }, 0)
    }
  
      const resolve = function(value) {
        settele('resolved', value)
      }
  
      const reject = function(value) {
        settele('rejected', value)
      }
  
      executor(resolve, reject)
  
      return {
        then: (onResolve, OnReject) => {
          resolveFn = onResolve
          rejectFn = OnReject
        }
      }
    }
  
  
  const promise = new MyPromise((resolve, reject) => {
  
    setTimeOut(() => {
      const i = 4;
  
      if (i % 2 == 0) {
        resolve(1)
      } else {
        reject('given numver is not even')
      }
  
    }, 0)
  
  })
  
  promise.then((value) => {
      console.log('calling pollyfill resolved', value)
    },
    (rejected) => {
      console.log('calling pollyfill rejected', rejected)
    }
  )
  
  