// fahrenheit to celsius
const ftoc = function (fahrenheit) {
  let celsius = (5 / 9) * (fahrenheit - 32);
  return Math.round(celsius * 10) / 10;
}

// celsius to fahrenheit
const ctof = function (celsius) {
 // [°C] × ​9⁄5 + 32
  let fahrenheit = (celsius * 1.8) + 32;
  return Math.round(fahrenheit * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
