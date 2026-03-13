// for loop
// for(let i = 1; i<=5; i++){
//     console.log(i);
// }
// for(let i=5; i>=1; i--){
//     console.log(i);
// }
// for(let i=1; i<=20; i=i+2){
//     console.log("odd number:",i);
// }
// for(let i=15; i>=1; i=i-2){
//     console.log("odd number:",i);
// }
// for(let i=2; i<=20; i=i+2){
//     console.log("even number:",i);
// }
// for(let i=20; i>=2; i=i-2){
//     console.log("even number:",i);
// }

// let n=prompt("enter number for multiplication table:");
// n=parseInt(n);
// let n=5;
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }
// for(let i=2; i<=20; i=i+2){
//     console.log(i);
// }

//nested for loop
// for(let i =1; i<=3; i++){
//     console.log("outer loop");
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

//while loop
// let i=1;
// while(i<=20){
//     console.log(i);
//     i=i+2;
// }

//favourite movie
// let favMovie ="pushpa";

// let guess= prompt("Guess My favourite Movie");

// while((guess!=favMovie) && (guess!="quit")){
//     guess=prompt("wrong Guess Please try again");
// }
// if(guess==favMovie){
//     document.writeln("congrats!! you guessed ");
// }
// else{
//     document.writeln("you Quited game");
// }

//while(guess!=favMovie){
    // if(guess=="quit"){
    //     document.write("you Quit");
    //      break;}
//     guess=prompt("wrong Guess Please try again");
// }
// if(guess==favMovie){
//     document.writeln("congrats!! you guessed ");
// }

// let i=1;
// while(i<=5){
//     if(i==3){
//         console.log("no need of 3 ");
//         break;
//     }
//     console.log(i);
//     i++;
// } console.log("out of loop");

//loop with arrays
// let fruits=["mango","apple","banana","grapes","litchi","orange"];

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// for(let i =fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
// }

// for(let i=0; i<fruits.length; i=i+2){
//     console.log(i, fruits[i]);
// }

// for(let i=1; i<fruits.length; i=i+2){
//     console.log(i, fruits[i]);
// }

// let heroes= [["ironman","spiderman","thor"],
// ["superman","wonder woman","flash"]];

// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);

//     for(let j=0; j<heroes[i].length; j++){
//         console.log(j, heroes[i][j]);
//     }
// }

// let student = [["ram",8.9,"jnk"], ["shyam",7.8,"pipra"],["gopal",8.4,"ktm"]];

// for(let i=0; i<student.length; i++){
//     console.log(`student detail of ${i}`);

//     for(let j=0; j<student[i].length; j++){
//         console.log(`j = ${j} ${student[i][j]}`);
//     }
// }

//for of loop using array and 
// let fruits=["mango","apple","banana","grapes","litchi","orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for of using string
// for(letter of "Bishwanath"){
// console.log(letter);
// }

//nested for of loop
// let heroes= [["ironman","spiderman","thor"],
// ["superman","wonder woman","flash"] ,["ajay","govinda","sanjay"]];

// for(list of heroes){
//     console.log(list);
//     for(hero of list){
//         console.log(hero);
//     }
// }