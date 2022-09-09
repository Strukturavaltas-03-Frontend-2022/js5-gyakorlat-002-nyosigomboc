import validateIPAddress from '../solution/js/validateIPAddress';

describe('validateIPAddress() ', () => {
  test('should return true, if IP address is valid', () => {
    const IPAddress = '127.0.0.1';

    expect(validateIPAddress(IPAddress)).toBe(true);
  });

  test('should return false, if IP address is start with 0 ', () => {
    const IPAddress = '0.1.1.1';

    expect(validateIPAddress(IPAddress)).toBe(false);
  });

  test('should return false, if IP address contains less than four 8 bit fields', () => {
    const IPAddress = '1.1.1';

    expect(validateIPAddress(IPAddress)).toBe(false);
  });

  test('should return false, if IP address contains more than four 8 bit fields', () => {
    const IPAddress = '1.1.1.1.1';

    expect(validateIPAddress(IPAddress)).toBe(false);
  });

  test('should return false, if any field is greather than 255', () => {
    const IPAddress = '256.1.1.1';

    expect(validateIPAddress(IPAddress)).toBe(false);
  });
});
