 ////**Event Bubling use stopPropagation***/
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){

//     event.stopPropagation();  // to stop the event bublling
//     console.log("ul was clicked");
// });

// for(let li of lis){
// li.addEventListener("click", function(){

//     event.stopPropagation(); /// to stop event bubling
//     console.log("lists was clicked");
// });
// }




///////Todo App list code
let inpu = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click",function(){
    //add task
    let lis = document.createElement("li");
    ul.appendChild(lis);

    lis.innerText= inpu.value;
    inpu.value = "";  // to remove written text from input make empty

    //delete task
    let delbtn = document.createElement("button");

    delbtn.innerText="Delete";
        delbtn.classList.add("delete");

     lis.appendChild(delbtn);


});

//delete logic it will not delete new added task so  we use bubling
    // let delet = document.querySelectorAll(".delete");
    // for(delbtns of delet){

    //     delbtns.addEventListener("click", function(){

    //         let par = this.parentElement; //delbtns.parentElement
    //         console.log(par);
            
    //         par.remove();
    //     })
    // }


    //delete new task we access parent element & apply event delegation
        ul.addEventListener("click", function(event){

           // // console.log(event.target);  //tels which is click
            // console.dir(event.target);
            console.log(event.target.nodeName);
            
            if(event.target.nodeName == "BUTTON"){ //BUTTON , LI
                
                let listdel = event.target.parentElement;
                listdel.remove();
                console.log("Task Deleted");
            }

        })
    







