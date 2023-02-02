/**
 * takes number || string value and returns a string converted into words(up to lakh)
 * @param {string||umber} value - takes a number || string
 */

export const convert = function(value) {
  value = value.toString();
  let sentence = getConvertedValue(value);
  sentence = sentence.slice(0, 1).toUpperCase() + sentence.slice(1)
  return sentence
}

const getConvertedValue = function(value) {
  const strLength = value.length;
  //for lakh
  if (strLength <= 7) {
    const numArr = ('0000000' + value).slice(-7).match(/^(\d{2})(\d{2})(\d{3})$/);
    return upToLakh(numArr);
  }
  throw Error('Currently it supports coverting numbers to word up to lakh')
}

const upToLakh = function(numArr) {
  const sentence = [];
  sentence.push(string(numArr, 1, 0, 1, 'lakh'));
  sentence.push(string(numArr, 2, 0, 1, 'thousand'));
  sentence.push(string(numArr, 3, 0, 0, 'hundred'));
  sentence.push(string(numArr, 3, 1, 2, 'rupees'));

  return sentence.join(' ').trim();
}

const string = function(numArr, indexOne, indexTwo, indexThird, value = '') {
  const onesObj = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteenn',
  };
  const tenthObj = {
    0: '',
    1: '',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  if (Number(numArr[indexOne])) {
    //check if the first value of the string is 0 or not if not get the both tenth and ones from respective arrays

    if (value !== 'hundred') return (onesObj[Number(numArr[indexOne])] || `${tenthObj[numArr[indexOne][indexTwo]]} ${onesObj[numArr[indexOne][indexThird]]}`) + ` ${value}`;

    if (value === 'hundred') {
      //[023] if first digit is placed on hundred(0) then remove value variable from sentence
      const isZero = onesObj[numArr[indexOne][indexTwo]];

      if (!isZero) return onesObj[numArr[indexOne][indexTwo]];

      return (onesObj[Number(numArr[indexOne])] || `${onesObj[numArr[indexOne][indexTwo]]} `) + value;
    }
  }
  return;
}