/**
 * Returns a mutateArr and pullValues if newArr set to true else returns a pulledArr, options values are set to true as default
 *@param {array} arr - An array of numbers/string/both
 *@param {array} pullValues - An array of numbers/string/both
 * @param {Object{}} options - list of options, in case of undefined default values will be used
 *
 */
export const pullValues = function(arr, pullValues, options = {}) {
  const defaultOptions = {
    caseSensitive: true,
    newArr: true,
    sort: true,
  }

  options = { ...defaultOptions, ...options };

  let pulledArr = [];

  //if arr is case sensitive it returns as values are passed as arguements and if set to false it returns values in lowercase
  arr = options.caseSensitive ? _isCaseSensitive(arr) : _isCaseSensitive(arr, options.caseSensitive);
  pullValues = options.caseSensitive ? _isCaseSensitive(pullValues) : _isCaseSensitive(pullValues, options.caseSensitive);

  //array will be sort if set to true else not
  arr = options.sort ? _isSorted(arr) : _isSorted(arr, options.sort);
  pullValues = options.sort ? _isSorted(pullValues) : _isSorted(pullValues, options.sort);

  //1) true true true
  //default result
  if (options.newArr && options.caseSensitive && options.sort) return _createNewArr(arr, pullValues, pulledArr);

  //2) false true true
  if (!options.newArr && options.caseSensitive && options.sort) return _createNewArr(arr, pullValues, pulledArr, options.newArr);

  //3) true false false
  if (options.newArr && !options.caseSensitive && !options.sort) return _createNewArr(arr, pullValues, pulledArr);

  //4) true false true
  if (options.newArr && !options.caseSensitive && options.sort) return _createNewArr(arr, pullValues, pulledArr);

  //5) false true false
  if (!options.newArr && options.caseSensitive && !options.sort) return _createNewArr(arr, pullValues, pulledArr, options.newArr);

  //6) true true false
  if (options.newArr && options.caseSensitive && !options.sort) return _createNewArr(arr, pullValues, pulledArr);

  //7) false false true
  if (!options.newArr && !options.caseSensitive && options.sort) return _createNewArr(arr, pullValues, pulledArr, options.newArr);

  //8) false false false
  if (!options.newArr && !options.caseSensitive && !options.sort) return _createNewArr(arr, pullValues, pulledArr, options.newArr);
}

const _isCaseSensitive = (arr, caseValue = true) => caseValue ? arr : arr.map(value => value.toLowerCase());

//isSorted
const _isSorted = (arr, sort = true) => sort ? arr.sort() : arr;

const _createNewArr = function(arr, pullValues, pulledArr, newArrValue = true) {
  if (newArrValue) {
    arr.forEach(value => pullValues.includes(value) ? pulledArr.push(value) : value);

    const newArr = arr.filter(value => !pulledArr.includes(value));
    return { newArr, pulledArr }
  }
  if (!newArrValue) {
    arr.forEach(value => pullValues.includes(value) ? pulledArr.push(value) : value);

    return { pulledArr }
  }
}