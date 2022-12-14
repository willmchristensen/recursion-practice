/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

function isSorted(arr){

  // ascending order === arr[0] < arr[1]
  let firstEle = arr[0];
  let nextEle = arr[1];

  if(arr.length === 1){

    return true;

  }

  if(nextEle < firstEle){

    return false;

  }

  // if ascending, check if next two

  return isSorted(arr.slice(1))


}

function isSorted(arr){

  if(arr[0] > arr[1]){

    return false;

  }else if(arr.length > 0){

    return isSorted(arr.slice(1));

  }else{

    return true;

  }


}
// check two eles
// remove first

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
