let todo = [];
let input = prompt('Enter your request:"add,delete,list, quit"');
 
while(true){

    if(input == "list"){
        console.log("------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-------------------");
    }

    else if (input == "quit"){
        console.log("You are exit from todo App");
        break;
    }

    else if(input == "add"){
        let add=prompt("Please Enter Task You Want To Add in List:");
        todo.push(add);
        console.log("Task Added Successfully");
    }

    else if(input == "delete"){
        let quit = prompt("Please Enter the Task Index You Want to Delete");
        todo.splice(quit, 1);
        console.log("Task Removed Successfully");
    }
    else{
        console.log("wrong entry Please enter: list,add,delete,quit");
    }

    input= prompt('Enter your request:"add,delete,list, quit"');

}