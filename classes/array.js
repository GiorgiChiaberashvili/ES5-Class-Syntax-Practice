// Your code here
Array.prototype.isEqual = function (array) {
    if (this.length !== array.length) {
        return false;
    }
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== array[i]) {
            return false;
        }
    }
    return true;
};




module.exports = Array;
