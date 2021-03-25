const removeFromArray = function(sourceArray, ...removeArray) {
    return sourceArray.filter(item => !removeArray.includes(item));
}

module.exports = removeFromArray
