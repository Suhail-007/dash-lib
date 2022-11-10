/**
 *@param {type} name description
 */
 const pullValues = function(arr, valuesArr, options) {

  valuesArr = valuesArr.sort();

  let pulledArr = [];

  if (options.caseSensitive === undefined) options.caseSensitive = true;
  if (options.newArr === undefined) options.newArr = true;
  if (options === undefined) {
    options = {
      caseSensitive: true,
      newArr: true,
    }
  }

  //true true
  if (options.newArr && options.caseSensitive) {
    arr.forEach(value => valuesArr.includes(value) ? pulledArr.push(value) : value);

    const newArr = arr.filter(value => !pulledArr.includes(value));
    return { newArr, pulledArr }
  }

  //false true
  if (!options.newArr && options.caseSensitive) {
    arr.forEach(value => valuesArr.includes(value) ? pulledArr.push(value) : value);
    return { pulledArr }
  }

  //true false
  if (options.newArr && !options.caseSensitive) {
    arr = arr.map(value => value.toLowerCase());

    arr.forEach(value => valuesArr.includes(value) ? pulledArr.push(value) : value);

    const newArr = arr.filter(value => !pulledArr.includes(value));
    return { newArr, pulledArr }
  }

  //false false
  if (!options.newArr && !options.caseSensitive) {
    arr = arr.map(value => value.toLowerCase());
    arr.forEach(value => valuesArr.includes(value) ? pulledArr.push(value) : value);
    return { pulledArr }
  }
}

const { pulledArr, newArr } = pullValues(['A', 'b', 'C', 'd'], ['a', 'c'], {
  newArr: true,
  caseSensitive: false,
});

console.log(pulledArr);
console.log(newArr);


//have to create a function which takes two parameters to check if caseSensitive or newArr is true/false