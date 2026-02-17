// let a= 10 ;
// let b= 20;
// let sum = a+b;
// console.log("sum of a and b is:", sum);
// console.log(`sum of ${a} and ${b} is ${sum} `);

// let age = 23;
// if (age<18){
//     console.log("you cannot vote");
//     console.log("try again ");
// }
// if(age>=18){
//     console.log("you can vote");
//     let name="kashi";
//     if(name=="kashi"){
//         console.log(`welcome${name}`);
//     }
//     console.log("you can drive");
// }

// practice ques1

// let color="red";
// if(color=="red"){
//     console.log("stop Now !");
// }
// else if(color=="green"){
//     console.log("Go now");
// }
// else if(color=="yellow"){
//     console.log("slow Drive");
// }
 
// let marks= 80;
// if(marks>=85){
//     console.log("A");
// }
// else if(marks>=65){
//     console.log("B");
// }
// else if (marks< 45){
//     console.log("C");
// }
// else if(marks>=35){
//     console.log("F");
// }

//practice que2
let size="xl";
if(size==="xl"){
    console.log("Price is Rs. 250");
}
else if (size==="xxx"){
    console.log("price is Rs. 200");
}
else if (size==="sm"){
    console.log("Price is Rs. 100");
}
else{
    console.log("price is Rs.50");
}

//nested if 
let mark=34;
if(mark>=34){
    console.log("congrats You pass");

    if(mark>80){
        console.log("Grade is Outstanding");
    }
    else{
        console.log("Grade is A");
    }
}
else{
    console.log("better luck Next time");
}

//practice ques
let str= "angel";
if(str[0]=='a' && str.length>3){
    console.log("It is a Good String");
}
else{
    console.log("Not a good String");
}

let num=12;
if((num%3===0)&& ((num+1 == 15)|| (num-1 ==11))){
    console.log("safe");
}
else{
    console.log("unsafe");
}

//switch statement
let color="red";
switch(color){
    case "red":
        console.log("stop now");
        break;
    case"green":
        console.log("go Now");
        break;
    case "yellow":
        console.log("go Slow");
        break;
    default:
        console.log("light is Not working");
}

//practice que
let day=4;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("wrong day selected");    
    }


    //alert and prompt

console.error("this is an error msg");
console.warn("this is warning messages");

let firstName=prompt("enter your firstName:");
let lastName=prompt("enter your lastname:");
let msg = "welcome"+firstName+""+lastName+"!";
alert(msg);