function roundSingle (temp) {
  return Math.round(temp * 10) / 10;
}
// fahrenheit to celsius
const ftoc = function (fahrenheit) {
  let celsius = (5 / 9) * (fahrenheit - 32);
  return roundSingle(celsius);
}

// celsius to fahrenheit
const ctof = function (celsius) {
  let fahrenheit = (celsius * 1.8) + 32;
  return roundSingle(fahrenheit);
}

module.exports = {
  ftoc,
  ctof
}
