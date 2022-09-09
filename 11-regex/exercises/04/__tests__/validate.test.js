import validate from '../solution/js/validate';

describe('validate() ', () => {
  describe('validateVisaCardNumber() ', () => {
    test('should return true, if card number is valid', () => {
      const visaCardNumber = '4234567890123456';

      expect(validate(visaCardNumber, 'visa')).toBe(true);
    });

    test('should return false, if card number not start 4', () => {
      const visaCardNumber = '3234567890123456';

      expect(validate(visaCardNumber, 'visa')).toBe(false);
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
        expect(validate(cardNumber, 'visa')).toBe(false);
      });
    });
  });

  describe('MAC address ', () => {
    test('should return true, if MAC address is valid', () => {
      const MACAddress = '00-14-22-01-23-EF';

      expect(validate(MACAddress, 'mac')).toBe(true);
    });

    test('should return false, if format is not valid', () => {
      const MACAddress = '001422012345';

      expect(validate(MACAddress, 'mac')).toBe(false);
    });

    test('should return false, if contains non hexa characters', () => {
      const MACAddress = '00-14-22-01-23-GG';

      expect(validate(MACAddress, 'mac')).toBe(false);
    });

    test('should return false, if IP address contains less than 6 part', () => {
      const MACAddress = '00-14-22-01-23';

      expect(validate(MACAddress, 'mac')).toBe(false);
    });

    test('should return false, if any field contains more than 6 part', () => {
      const MACAddress = '00-14-22-01-23-45-67';

      expect(validate(MACAddress, 'mac')).toBe(false);
    });
  });

  describe('IP Address ', () => {
    test('should return true, if IP address is valid', () => {
      const IPAddress = '127.0.0.1';

      expect(validate(IPAddress, 'ip')).toBe(true);
    });

    test('should return false, if IP address is start with 0 ', () => {
      const IPAddress = '0.1.1.1';

      expect(validate(IPAddress, 'ip')).toBe(false);
    });

    test('should return false, if IP address contains less than four 8 bit fields', () => {
      const IPAddress = '1.1.1';

      expect(validate(IPAddress, 'ip')).toBe(false);
    });

    test('should return false, if IP address contains more than four 8 bit fields', () => {
      const IPAddress = '1.1.1.1.1';

      expect(validate(IPAddress, 'ip')).toBe(false);
    });

    test('should return false, if any field is greather than 255', () => {
      const IPAddress = '256.1.1.1';

      expect(validate(IPAddress, 'ip')).toBe(false);
    });
  });
});
