const convert = function(num) {
  num = num.toString();
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


  return getConverted(num, ones, tenth);
}

const getConverted = function(num, onesArr, tenthArr) {
  //for lakh
  if (num.length <= 7) {
    const numArr = ('0000000' + num).slice(-7).match(/^(\d{2})(\d{2})(\d{3})$/);

    return lakh(numArr, onesArr, tenthArr);
  }
}

const lakh = function(numArr, onesArr, tenthArr) {
  let sentence;
  sentence = numArr[1] != 0 ? (onesArr[Number(numArr[1])] || `${tenthArr[numArr[1][0]]} ${onesArr[numArr[1][1]]} `) + ' lakh': '';

  sentence += numArr[2] != 0 ? (onesArr[Number(numArr[2])] || ` ${tenthArr[numArr[2][0]]} ${onesArr[numArr[2][1]]} thousand `) : '';

  sentence += numArr[3] != 0 ? (onesArr[Number(numArr[3])] || `${onesArr[numArr[3][0]]} hundred `) : '';

  sentence += numArr[3] != 0 ? (onesArr[Number(numArr[3])] || `${tenthArr[numArr[3][1]]} ${onesArr[numArr[3][2]]}`) : '';

  return sentence
}

console.log(convert(24));