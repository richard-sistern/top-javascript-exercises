const palindromes = function(string) {
    cleanString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    reverseString = cleanString.split("").reverse().join("")
    return cleanString == reverseString;
}

module.exports = palindromes
