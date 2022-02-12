function calculator(str , a,b)
{
    if(str == 'add'){
        return function add(){
            console.log(a+b);
        }
    }
}

let returnedFunc = calculator('add',2,3);

console.log("returned function is\n"+returnedFunc);
returnedFunc();


// 2 function expression

let sayHi=function(){
    console.log("hello guys is am function expression")

}
console.log("line 22\n :"+sayHi);
sayHi();
console.log(sayHi);

let sayBye=function(){
    console.log("Bye")

}
console.log("line 30\n :"+sayBye);
sayBye();
console.log(sayBye);

// 3 IIFE --> imediately invoked function expression
//type 2 + immediate calling
function add(a,b){
    return a+b;
}

add(2,3);

let additionIIFE=(function (a,b){
 console.log("line 43 :"+(a+b));
})(20,30);