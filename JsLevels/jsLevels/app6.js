//this keyword  used for acess obj
// const student = {
//     name:"bishwanath",
//     roll: 22,
//     eng: 89,
//     math: 76,
//     phy: 79,

//     getavg(){
//         let avg = (this.eng+this.math+this.phy)/3;
//         console.log(`the avg mark of ${this.name} is = ${avg}`);
//         console.log(this);
//     }
// };
// student.getavg();


//try and catch block
// try{
//     console.log("hello");
//     console.log(a);
//     console.log("after error");
// }
// catch(err){
//     console.log(" in try block a is not defined");
//     console.log("catch block");
//     console.log(err);
// }


//Miscellaneous topics  ()=>{}; Arrow function
// const printName = ()=>{  //no args
//     console.log("My name is Arrow function");
// };
// printName();

// const add = (a,b)=>{   //with args
//     console.log("sum of a and b is:",a+b);
// }
// add(4,5);

// const area = (l,b)=>{
//     return l*b;
// }
// console.log(area(4,5));

// //with single args we can also define without () 
// const square = n =>{
//     console.log("square of number is ",n*n);
// }
// square(3);


//implicit return of arrow function
// const add = (a,b)=> a+b;
// console.log(add(4,8));

// const mul = (p,q)=> p*q;
// console.log(mul(4,3));

// const pow = (m,n) => m**n;
// console.log(pow(2,3));



//setTimeOut(function, timeout);  it will run once
// console.log("we are here!");

// setTimeout(() => {
//     console.log("ApnaCollege");
// }, 3000);

// console.log("welcome to u in ");
// console.log("welcome to u in ");
// console.log("welcome to u in ");

// setTimeout( ()=>{
//     console.log("we learned settimeout function");
// },4000);


//setInterval(fun, timeout);  //run infinite 
// setInterval( ()=>{
//     console.log("Apnacollege");
// },2000);        //it run each time after 2s

//  //to stop it use clearInterval(id);
// let id = setInterval(()=>{
//     console.log("Hello World");
// }, 2000);

// let id2 = setInterval(()=>{
//     console.log("welcome");
// }, 3000);

// clearInterval(id2);



//this keyword with arrow function = parent fn and normal func=caling fn
// const student = {
//     name:"bishwanath",
//     marks: 56,
//     prop: this,  //global scope -> window

//     getName: function(){
//         console.log(this);  //student
//         console.log(this.name);  //calling object  = student obj 
//     },

//     getMark: ()=> {
//         console.log(this);  //parent scope
//         console.log(this.marks);  // window lexical scope 
//     },

//     getInfo1: function(){    //  -> student
//         setTimeout( () => {
//             console.log(this);
//             console.log("it follow its's parent func scope. student");
//         }, 2000);
//     },

//     getInfo2: function(){    // window
//         setTimeout( function() {
//             console.log(this);
//             console.log("it follow the func scope i.e. window");
//         }, 3000);
//     }
// };
// student;
// student.getName();
// student.getMark;
// student.getInfo1();
// student.getInfo2();


//practice questions 
// const square = (n)=>{
//     return n*n;
// };
// console.log(square(5));
// //or  2nd way 
// const squar = (n)=> n*n; ;
// console.log(squar(6));



let id= setInterval( ()=>{
    console.log("Hello world");
},2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clearInterval ran");
}, 10000);