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