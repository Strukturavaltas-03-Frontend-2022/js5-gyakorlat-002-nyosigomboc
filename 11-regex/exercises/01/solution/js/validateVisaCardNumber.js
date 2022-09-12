const simpleCardRegexp = /^4\d{12}(\d{3})?$/;
// const cardRegexp = /^(?<IIN>4\d{5})(?<account>\d{9})(?<checksum>\d)$/; // not needed now

// a description of card numbers and the Luhn Algorithm
// https://medium.com/p/b9fa63ec7863#c33a

const getNthDigit = (str = '', n = 0) => Number.parseInt(str[n], 10);

const toBeDoubled = (len, n) => (len - n) % 2 === 1;

const checkChecksum = (str = '') => {
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    const digit = getNthDigit(str, i);
    const toAdd = toBeDoubled(str.length, i) ? digit : 2 * digit;
    sum += toAdd;
    if (toAdd > 9) {
      sum -= 9;
    }
  }
  return sum % 10 === 0;
};

// this uses the checksum as well
const correctValidateVisaCardNumber = (cardNumber) => {
  const match = simpleCardRegexp.exec(cardNumber);
  if (match === null) {
    return false;
  }
  return checkChecksum(cardNumber);
};

const simpleValidateVisaCardNumber = (cardNumber) => simpleCardRegexp.test(cardNumber);

const validateVisaCardNumber = correctValidateVisaCardNumber;

export default validateVisaCardNumber;
