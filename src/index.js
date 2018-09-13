module.exports = function getZerosCount(number, base) {
    var n = parseInt(number);
    var num;
    var x;
    var res;
    for (let i = 2; i <= base; i++) {
        if (base % i === 0) {
            x = 0;
            while (base % i === 0) {
                x++;
                base = parseInt(base / i);
            }
            num = number;
            res = 0;
            while (num / i > 0) {
                res += Math.floor(num / i);
                num = Math.floor(num / i);
            }
            n = Math.min(n, res / x);
        }
    }
    return parseInt(n);
};