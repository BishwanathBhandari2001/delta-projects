// functions
// function fun_name(){               //function definition
//     console.log("hello function");
// }

// fun_name();

// function printname(){
//     console.log("my name is Bishwanath Bhandari");
//     console.log("I am from Nepal");
// }

// printname();

// function print1to10(){
//     for(let i =0; i<10; i++){
//         console.log(i);
//     }
// }
// print1to10();

// function con(){
//     let age=30;
//     if(age>=18){
//         console.log("valid user for driving");
//     }else{
//                 console.log("Not valid user for driving");
//     }
// }
// con();
                 //practice questions
//print poem
// function poem(){
//     console.log("Twinkle Twinkle Little star ");
//     console.log("how i wonder what you are?");
//     console.log("Up above the world so high like a diamond in the sky");
// }
// poem();

// function rolldice(){
//     let random = Math.floor(Math.random()*6)+1;
//     console.log(random);
// }
// rolldice();

// function info(name,age){
//     console.log(`${name}'s age is ${age}`);
// }
// info("Bishwanath",24);  //parameters
// info("shiv kumar");  //it follow order
// info(28);

// function sum(a,b){
//     console.log(a+b);
// }
// sum(4,5);
// sum(6,8);
// sum(8,4);

// function avg(a,b,c){
//     console.log((a+b+c)/3);
// }
// avg(5,6,4);
    // avg;  //userdefined function
    // console.log;  //built-in
    // Math.random;
    // push;

// function multiplicationTable(n){
//     for(let i=n; i<=n*10; i=i+n){
//         console.log(i);
//     }
// }
// multiplicationTable(2);
// multiplicationTable(5);

   //** return keyword **/
//    function vote(age){
//     console.log("vote eligible user");
//     return age;
//     console.log("good luck");  // it will never run 
//    }
//    console.log(vote("kashi"));

//    function sum(a,b){
//     return a+b;
//    }
//    console.log(sum(12,5));
//    console.log(sum(sum(10,2),3));

      //practice question
// function add(n){
//     let sum=0;
//     for(let i=1; i<=n; i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(add(10));

// function concat(arrStr){
//     let result= "";
//     for(let i=0; i<arrStr.length; i++){
//         result+= arrStr[i];
//     }
//     return result;
// }
// console.log(concat(["ram","shyam","welcome"]));

    //scope  function-scope
// let sum = 40;

// function calSum(a,b){
//     let sum= a+b;
//     console.log(sum);
// }
// calSum(4,5);
// console.log(sum);

//    //block-scope
// {
//     let a=10;
//     // console.log(a);
// }
// console.log(a);  //not accessible from outside of block 

//      //lexical-scope
// function outerFun(){
//     let x=5;
//     let y=20;
//     function innerFun(){
//         let a=23;
//         console.log(x);
//         console.log(y);
//     }
//     innerFun();
//     // console.log(a);  outerfun cannot access innerfun variable
// }
// console.log(outerFun());

    //hoisting = we can used variable of before it has been declared
// function outerFun(){

//     function innerFun(){
//             console.log(x);
//             console.log(y);
//         }

//         let x=5;
//         let y=20;

//     innerFun();
// }
// outerFun();


    //** Practice questions  what will be output**/
// let greet= "hello";  //global scope

// function changeGreet(){
//     let greet = "namaste";   //function scope
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet);  // lexical scope
//     }
//     innerGreet();
// }

// console.log(greet);
// changeGreet();

    //function Expression -> is Nameless function & var store & call fun
// let sum = function(a,b){
    
//     return a+b;
// }
// console.log(sum(4,2));

// let names = function(){
//     console.log("name is ....");
// }
// names();


//**Higher order function**/  one function call multiple other functions
    // function multipleFunc(func , count){
    //     for( let i=1; i<=count; i++){
    //         func();
    //     }
    // }

    // let greet= function(){
    //     console.log("Namaste");
    // }

    // multipleFunc(greet, 100);
    // multipleFunc(function(){
    //     console.log("Hello");
    // },1000);

//**Higher order function with Returns a Function**/
function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    } else if(request=="even"){
        return function(n){
            console.log((n%2==0));
        }
    }else {
        console.log("wrong request");
    }
}

request = "odd";
let test = oddEvenTest(request); 
test(3);


// object methods 
const calculator ={
    add: function(a,b){
        return a+b;
    },

    sub: function(a,b){
        return a-b;
    },

    mul: function(a,b){
        return a*b;
    },

    division: function(a,b){
        return a/b;
    }

};

console.log(calculator);
console.log(calculator.add);
console.log(calculator.add(4,5));
console.log(calculator.mul(6,9));


// short-hand of oobject method 
const calculators ={
    add(a,b){
        return a+b;
    },

    sub(a,b){
        return a-b;
    },

    mul(a,b){
        return a*b;
    }
};

console.log(calculators);
console.log(calculators.add);
console.log(calculators.add(4,5));
console.log(calculators.mul(6,9));