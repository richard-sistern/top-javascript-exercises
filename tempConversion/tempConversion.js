// fahrenheit to celsius
const ftoc = function (fahrenheit) {
  let celsius = (5 / 9) * (fahrenheit - 32);
  return Math.round(celsius * 10) / 10;
}

// celsius to fahrenheit
const ctof = function() {

}

module.exports = {
  ftoc,
  ctof
}
