import validateVisaCardNumber from '../solution/js/validateVisaCardNumber';

describe('validateVisaCardNumber() ', () => {
  test('should return true, if card number is valid', () => {
    const visaCardNumber = '4234567890123456';

    expect(validateVisaCardNumber(visaCardNumber)).toBe(true);
  });

  test('should return false, if card number not start 4', () => {
    const visaCardNumber = '3234567890123456';

    expect(validateVisaCardNumber(visaCardNumber)).toBe(false);
  });

  test('should return false, if card number length is not 13 or 16', () => {
    const visaCardNumbers = [
      '42345678901',
      '423456789013',
      '42345678901344',
      '423456789013445',
      '42345678901344567',
    ];

    visaCardNumbers.forEach((cardNumber) => {
      expect(validateVisaCardNumber(cardNumber)).toBe(false);
    });
  });
});
