/**
 * Returns a newArr if newArr set to true else returns a pulledArr
 *@param {array[]} arr - An array of numbers/string/both
 *@param {[]} valuesArr - An array of numbers/string/both
 * @param {{}} options - list of options, in case of undefined default values will be used
 *
 */
export const pullValues = function(arr, valuesArr, options = {}) {

  const defaultOptions = {
    caseSensitive: true,
    newArr: true,
    sort: true,
  }

  options = { ...defaultOptions, ...options };

  let pulledArr = [];

  arr = options.caseSensitive ? _isCaseSensitive(arr) : _isCaseSensitive(arr, options.caseSensitive);
  valuesArr = options.caseSensitive ? _isCaseSensitive(valuesArr) : _isCaseSensitive(valuesArr, options.caseSensitive);

  arr = options.sort ? _isSorted(arr) : _isSorted(arr, options.sort);
  valuesArr = options.sort ? _isSorted(valuesArr) : _isSorted(valuesArr, options.sort);

  //1) true true true
  //default result
  if (options.newArr && options.caseSensitive && options.sort) return _createNewArr(arr, valuesArr, pulledArr);

  //2) false true true
  if (!options.newArr && options.caseSensitive && options.sort) return _createNewArr(arr, valuesArr, pulledArr, options.newArr);

  //3) true false false
  if (options.newArr && !options.caseSensitive && !options.sort) return _createNewArr(arr, valuesArr, pulledArr);

  //4) true false true
  if (options.newArr && !options.caseSensitive && options.sort) return _createNewArr(arr, valuesArr, pulledArr);

  //5) false true false
  if (!options.newArr && options.caseSensitive && !options.sort) return _createNewArr(arr, valuesArr, pulledArr, options.newArr);

  //6) true true false
  if (options.newArr && options.caseSensitive && !options.sort) return _createNewArr(arr, valuesArr, pulledArr);

  //7) false false true
  if (!options.newArr && !options.caseSensitive && options.sort) return _createNewArr(arr, valuesArr, pulledArr, options.newArr);

  //8) false false false
  if (!options.newArr && !options.caseSensitive && !options.sort) return _createNewArr(arr, valuesArr, pulledArr, options.newArr);
}

const _isCaseSensitive = function(arr, caseValue = true) {

  if (caseValue) {
    arr = arr.map(value => value);
    return arr
  }

  if (!caseValue) {
    arr = arr.map(value => value.toLowerCase());
    return arr;
  }
}

//isSorted
const _isSorted = function(arr, sort = true) {
  if (sort) {
    arr = arr.sort();
    return arr
  }

  if (!sort) {
    arr = arr;
    return arr;
  }
}

const _createNewArr = function(arr, valuesArr, pulledArr, newArrValue = true) {
  if (newArrValue) {
    arr.forEach(value => valuesArr.includes(value) ? pulledArr.push(value) : value);

    const newArr = arr.filter(value => !pulledArr.includes(value));
    return { newArr, pulledArr }
  }
  if (!newArrValue) {
    arr.forEach(value => valuesArr.includes(value) ? pulledArr.push(value) : value);

    return { pulledArr }
  }
}

pullValues()