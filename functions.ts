function add(n1: number,n2:number){
    return n1 + n2
}

function printResult(num: number): void{
    console.log('Result: ' + num)
}

function addAndHandle(n1:number,n2:number,cb : (n1:number) => void){
    const result = n1 +n2;
    cb(result)
}

printResult(add(2,56))

let combineValue: (a:number,b:number) => number;
//  combineValue = printResult
 combineValue = add

console.log(combineValue(8,8))

addAndHandle(10,12,(result)=>{console.log(result)});