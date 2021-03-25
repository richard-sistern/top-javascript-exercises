const repeatString = function(str, counter) {
    if (counter < 0) {
        return 'ERROR'
    }
    else {
        return str.repeat(counter)
    }
}

module.exports = repeatString
