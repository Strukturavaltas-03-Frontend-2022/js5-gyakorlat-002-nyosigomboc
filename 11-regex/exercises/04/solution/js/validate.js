const roles = {
  // visa without checksum
  visa: /^4\d{12}(\d{3})?$/,

  // this is still readable, parsing and comparing as an integer to 255 is better
  // ip: /^([1-9]\d{0,2})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
  // this is a bit harder to read, but pure regexp (probably shouldn't go close to production code)
  ip: /^([1-9]\d{0,1}|1\d{2}|2[0-4]\d|25[0-5])(\.(0|[1-9]\d{0,1}|1\d{2}|2[0-4]\d|25[0-5])){3}$/,

  // mac is simple
  mac: /^[0-9a-f]{2}(-[0-9a-f]{2}){5}$/i,
};

const validate = (str, type) => roles[`${type}`].test(str);

export default validate;
