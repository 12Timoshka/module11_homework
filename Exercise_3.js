
function result(a) {
    return function(b) {
        return a + b;
    }
}

console.log (result(2)(2));
