let  num = prompt("Enter Max Number");

const random = Math.floor(Math.random()*num)+1;

let guess= prompt("guess the Number:");

while(true){
    if(guess== "quit"){
        console.log("you exit from game");
        break;
    }

    if(guess==random){
        console.log("Congrats!! you are right. Random Number Was:",random);
        break;
    } else if(guess<random){ 
        guess = prompt("Hint: You Guess small Number. Please try Again:");
    }else{
        guess= prompt("Hint: Your Guess was too Large. Pleasse try Again");
    }


}