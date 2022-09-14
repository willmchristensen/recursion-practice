/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns an array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten (arr){

  let flattened = [];

  // we want to push all the elements from the first subarray and then remove that subarray so we can grab the next one

  arr.forEach(element => {

    if(Array.isArray(element)){

      flattened.push(...flatten(element))

    }else{

      flattened.push(element)

    }

  });

  return flattened;


}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
