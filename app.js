function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //   if(resultConversion === 'as-number'){
    //     return +result
    //   }else{
    //   return result.toString();
    //   }
    return result;
}
var combinedAges = combine(1, 32, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("1", "32", "as-number");
console.log(combinedStringAges);
var combinedNames = combine("Zoe ", "Saldana", "as-text");
console.log(combinedNames);
