const sumAll = function(a, b) {
    if (a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
        let min = a, max = b;
        if (a > b) {
            min = b;
            max = a;
        }

        let total = 0;
        let i = min;
        for (i; i <= max; i++) {
            total += i;
        }

        return total;
    }
    else {
        return 'ERROR';
    }
}

module.exports = sumAll
