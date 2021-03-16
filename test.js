


function curry() {
    let arr = []
    let ceshi = function () {
        let xx = Array.from(arguments)
        if (arguments.length == 3) {
            return Array.from(arguments)
        } else {
            arr = arr.concat(xx)
            if (arr.length == 3) {
                arr = []
                return arr
            }
        }
        return ceshi
    }
    return ceshi
}
// curry(1, 2)
// var abc = function(a, b, c) {
//   return [a, b, c];
// };

var curried = curry();

// curried(1)(2)(3);
// // => [1, 2, 3]

// curried(1, 2)(3);
// // => [1, 2, 3]

// curried(1, 2, 3);
// => [1, 2, 3]