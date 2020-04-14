function Test(message, value) {
    this.message = message;
    this.value = value;

    Test.prototype.toBe = function(result) {
        console.log(message);
        if(this.value === result) {
            console.log("\x1b[42m" , "Passed", "\x1b[40m");
        } else {
            console.log("\x1b[41m", 'Failed', "\x1b[40m");
            console.log("\x1b[36m" , "--- returned:", this.value , "\x1b[37m")
        }
    }
}

function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

module.exports = Test;