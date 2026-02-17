//practice question   1
// let num = 1;
// if(num%10==0){
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }


//practice question  2
// let names= prompt("Please Enter Your Name:");
// let age= prompt("Enter Your Age: ");
// let display = alert(`Name is ${names} Age is ${age} years old`);


//practice question  3
// let quater=8;
// switch(quater){
//     case 1:
//         document.writeln("January, February, March");
//         break;
//     case 2:
//         document.writeln("April, May, June");
//         break;
//     case 3:
//         document.writeln("July, August, September");
//         break;
//     case 4:
//         document.writeln("October, November, December");
//         break;
//     default:
//         document.writeln("Please choose valid Quater among 1 to 4");
// }


//practice question  4
// let string="Advanced";
// if((string[0]==='A' || string[0]==='a') && (string.length>=5)){
//     document.writeln("A String is a golden String");
// }
// else {
//     document.writeln("A String is not a golden String");
// }


//practice question  4
let a=5;
let b=8;
let c=7;

if(a>b){
    if(a>c){
        document.writeln("a is greater");
    } else {
        document.writeln("c is greater");
    }
}else{
 if (b>c){
        document.writeln("b is greater");
}
else {
            document.writeln("c is greater");
}
}


//practice question 6
let num1 = 345;
let num2 = 935;
if(num1%10 == num2%10){
    document.writeln(`the same last digit is ${num1%10}`);
}else{
    document.writeln("last digit is not same");
}
