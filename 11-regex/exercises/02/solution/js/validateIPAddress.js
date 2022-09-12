// const regexpIP = /^([1-9]\d{0,2})(\.\d{1,3}){3}$/; // saved groups come handy
const regexpIP = /^([1-9]\d{0,2})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;

const bytesInIPv4 = 4;

const validateIPAddress = (str = '') => {
  const match = regexpIP.exec(str);
  if (match === null) {
    return false;
  }
  for (let i = 1; i <= bytesInIPv4; i += 1) {
    const part = Number.parseInt(match[i], 10);
    if (part > 255) {
      return false;
    }
  }
  return true;
};

export default validateIPAddress;
