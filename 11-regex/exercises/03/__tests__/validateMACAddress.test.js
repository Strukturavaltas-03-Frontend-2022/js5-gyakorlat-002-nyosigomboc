import validateMACAddress from '../solution/js/validateMACAddress';

describe('validateMACAddress() ', () => {
  test('should return true, if MAC address is valid', () => {
    const MACAddress = '00-14-22-01-23-EF';

    expect(validateMACAddress(MACAddress)).toBe(true);
  });

  test('should return false, if format is not valid', () => {
    const MACAddress = '001422012345';

    expect(validateMACAddress(MACAddress)).toBe(false);
  });

  test('should return false, if contains non hexa characters', () => {
    const MACAddress = '00-14-22-01-23-GG';

    expect(validateMACAddress(MACAddress)).toBe(false);
  });

  test('should return false, if IP address contains less than 6 part', () => {
    const MACAddress = '00-14-22-01-23';

    expect(validateMACAddress(MACAddress)).toBe(false);
  });

  test('should return false, if any field contains more than 6 part', () => {
    const MACAddress = '00-14-22-01-23-45-67';

    expect(validateMACAddress(MACAddress)).toBe(false);
  });
});
