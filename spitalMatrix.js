let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
//Output: [1,2,3,6,9,8,7,4,5]

function spiralMatrix(matrix) {
  let result = []

  while (matrix.length) {
    result.push(...matrix.shift())
    matrix.forEach((row) => result.push(row.pop()))
    if (matrix.length) {
      result.push(...matrix.pop().reverse())
    }
    matrix.forEach((row) => result.push(row.pop()))
  }
  console.log("result", result)
  console.log("result", matrix)
}

console.log(spiralMatrix(matrix))
