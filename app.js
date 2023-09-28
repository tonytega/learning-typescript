function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(2, 56));
var combineValue;
//  combineValue = printResult
combineValue = add;
console.log(combineValue(8, 8));
addAndHandle(10, 12, function (result) { console.log(result); });
