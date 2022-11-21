export const convert = function(num) {
  num = num.toString();

  return getConverted(num);
}

const getConverted = function(num) {
  const strLength = num.length;
  //for lakh
  if (strLength <= 7) {
    const numArr = ('0000000' + num).slice(-7).match(/^(\d{2})(\d{2})(\d{3})$/);
    return lakh(numArr);
  }
}

const lakh = function(numArr) {
  let sentence;
  sentence = string(numArr, 1, 0, 1, 'lakh');
  sentence += string(numArr, 2, 0, 1, 'thousand');
  sentence += string(numArr, 3, 0, 0, 'hundred');
  sentence += string(numArr, 3, 1, 2, '');

  return sentence.trim()
}

const string = function(numArr, indexOne, indexTwo, indexThird, value = '') {
  const ones = onesArr();
  const tenth = tenthArr();
  console.log(numArr);

  if (Number(numArr[indexOne])) {
    //check if the first value of the string is 0 or not if not get the both tenth and ones from respective arrays

    if (value !== 'hundred') return (ones[Number(numArr[indexOne])] || `${tenth[numArr[indexOne][indexTwo]]} ${ones[numArr[indexOne][indexThird]]}`) + ` ${value} `;

    if (value === 'hundred') {
      const isZero = ones[numArr[indexOne][indexTwo]];

      //[023] first digit place on hundred(0) then remove value variable from sentence
      if (!isZero) return ones[numArr[indexOne][indexTwo]];

      if (isZero) return (ones[Number(numArr[indexOne])] || `${ones[numArr[indexOne][indexTwo]]}`) + ` ${value} `;
    }
  } else return '';
}

function onesArr() {
  return ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
}

function tenthArr() {
  return ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
}