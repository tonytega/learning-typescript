function combine(input1:number | string,input2:number | string){
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number'){
     result = input1 + input2
     return result
    }else{
        result = input1.toString() + input2.toString()
    return result;
}
    
}

const combinedAges = combine(1,32)
console.log(combinedAges)
const combinedNames = combine('Zoe ','Saldana')
console.log(combinedNames)