const regexpMAC = /^[0-9a-f]{2}(-[0-9a-f]{2}){5}$/i;

const validateMACAddress = (str = '') => regexpMAC.test(str);

export default validateMACAddress;
