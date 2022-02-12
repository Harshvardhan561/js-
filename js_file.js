/*var a;
a=10
console.log(typeof a);
console.log(a);


a="hello"
console.log(a);
console.log(typeof a);

a=null
console.log(a);
console.log(typeof a);

a=true
console.log(a);
console.log(typeof a);*/

var num =10;
console.log(num);

var float = 2.4;
console.log(float);

var t=true;
var f =false;
console.log(t);
console.log(f);

//String :'' ,"" , `` . 
var str ='a';
console.log(typeof str);

str = "hello how are ya!";
console.log(str);

str = "how are you ? \ni am fine";
// we need to use backslash (\)
console.log(str);

var b =`how are ya ? 
i am doing good`;
// for ` ` we do not need \n
console.log(b);

var num =10;
// by using ` ` we can use variables by appling ${variable name}
console.log(`half of ${num} is ${num/2}`);


// var can be re-declared and re-intialised
var ab=10;
console.log(ab);

 var ab="100"
console.log(ab);

let c =11;
console.log(c);

/*let c="112" //SyntaxError: Identifier 'c' has already been declared
console.log(c);*/

// we can re-intialise let but can't re declare
 
c="112";
console.log(c);

var h=10;

for(var i=0;i<=h;i++)
{
    if(i%2==0)
    {
     console.log("this is even");
    }
}

const d=2;
// na hi redeclare na hi reintialize
// const d=5;SyntaxError: Identifier 'd' has already been declared
//d=4 TypeError: Assignment to constant variable.


let j =20;
for(var i=0;i<num;i++)
{
    let j=20;
    if(i%2==0)
    {
        let hello =1000;
        console.log(i);
        console.log(hello);
    }
    console.log("inner"+j);
}

console.log("outer "+j);
console.log(`value of i is " ${i}`);
// console.log(hello);//error 