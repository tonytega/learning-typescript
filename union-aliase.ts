type unionType = number | string;
type literalType = 'as-number' | 'as-text'

function combine(
  input1: unionType,
  input2: unionType,
  resultConversion: literalType
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
//   if(resultConversion === 'as-number'){
//     return +result
//   }else{
//   return result.toString();
//   }
return result
}

const combinedAges = combine(1, 32, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("1", "32", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Zoe ", "Saldana", "as-text");
console.log(combinedNames);
