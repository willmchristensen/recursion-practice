/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

// let range = (start, end) => {

//   let array = [start]
//   // base case
//   if (end < start){
//     return [];
//   }

//   debugger
//   if (array[array.length - 1] === (end - 1)) {
//     //array.push(array[array.length -1])
//     return array;
//     debugger
//   } else {
//     // recursive case
//     debugger
//     let newEl =  array[array.length -1] + 1
//     return array.concat(range(newEl, end))
//   }

// }

let range = (start, end) => {
  if (end <= start) {
    return []
  }
  return [start, ...range(start+1, end)]

}

console.log(range(1, 5))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
