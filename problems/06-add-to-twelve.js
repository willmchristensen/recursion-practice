/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

let addToTwelve = (array) => {
  if (array.length < 2){
    return false;
  }
  let ele1 = array[0]
  let ele2 = array[1]

  if (ele1 + ele2 === 12){
    return true;
  }

  //console.log(pair)
  return addToTwelve(array.slice(1))
}

console.log(addToTwelve([1, 3, 4, 7, 5]))

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
