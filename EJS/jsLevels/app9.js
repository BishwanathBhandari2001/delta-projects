// let btn = document.querySelector('button');

// btn.onclick= function (){
//     alert("button is clicked!!");
// }

// function sayhello(){
//     console.log("button 1 is clicked");
// }

// btn.onclick= sayhello;

// let btns= document.querySelectorAll('button');

// for(btn of btns){
    // btn.onclick= buttongroup;   //onclick event

    // btn.onmouseenter= function (){    //onmouse
    //     console.log("mouseEvent occured");
    // } ; 


//*******EventListener to overcome on events
    // btn.onclick = buttongroup;
    // btn.onclick= hey;   //1 time  we can't do other events so use eventlistener

//     btn.addEventListener("click",buttongroup);

//     btn.addEventListener("dblclick" , function(){
//         window.open("double clicked button");
//     });


//         // console.dir(btns);
// }


// function buttongroup(){
//     console.log("buttons are clicked");
// }

// function hey(){
//     window.print("hello is clicked");
// }



//***this is used in eventlistener***// html code in  randomcolorgenrator
// let btn = document.querySelector('button');
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// btn.addEventListener("click", function (){ // same fn in many element
//     console.log( btn.innerText);           // so code redundancy problem
//     btn.style.backgroundColor= "blue";     // to  solve it we use THIS
// });

// p.addEventListener("click", function (){
//     console.log( p.innerText);
//     p.style.backgroundColor= "blue";
// });

// h1.addEventListener("click", function (){
//     console.log( h1.innerText);
//     h1.style.backgroundColor= "blue";
// });

// h3.addEventListener("click", function (){
//     console.log( h3.innerText);
//     h3.style.backgroundColor= "blue";
// });


//****to overcome we use THis in eventlistener*****//

// function changeColor(){

//     console.log( this.innerText);
//     this.style.backgroundColor= "blue";
// }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);



// //***keyboard event***//

// let inp = document.querySelector("input");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event);
// });
// btn.addEventListener("dblclick", function(e){
//     console.log(e);
// });

// inp.addEventListener("keydown", function(evt){
//     console.log(evt);
//     console.log("code is : ",evt.code);
//     console.log("key is : ",evt.key);
// });

// inp.addEventListener("keyup", function(evt){
//     console.log(evt);
//     console.log("keyup code is : ",evt.code);
//     console.log("key is : ",evt.key);
// });
 
  ///character moving game

// let inp = document.querySelector("input");
// inp.setAttribute("placeholder", "Move Your Character..");

// inp.addEventListener("keydown", function(event){
//     //ArrowUp , ArrowDown , ArrowLeft ArrowRight

//     if(event.code == "ArrowUp"){
//         console.log("Move Forward");
//     }
//     else if (event.code == "ArrowDown"){
//         console.log("Move Backward");
//     }
//     else if (event.code == "ArrowLeft"){
//         console.log("Move Left side");
//     }else{
//         console.log("move right side");
//     }
// });



//***Form Event***/
// let form = document.querySelector("form");

// form.addEventListener("submit", function(){
//     console.log("form Submitted");
//     alert("form submitted successfully");
// });

// // to stop default events  we use PREVENTDEFAULT()
// form.addEventListener("submit", function(event){
//     event.preventDefault();  // preventDefault()
//     alert("form submitted successfully");
//     console.log("form Submitted");

// });



//**Etract Form data***//
// let form = document.querySelector("form");

// form.addEventListener("submit", function(evt){
//     evt.preventDefault();

//     // let input = document.querySelector('input');
//     //  console.dir(form);
//     //    console.dir(form.elements);  // no need for queryselector using it

//           // get value of form   use .VALUE
//      let user = this.elements[0];  // form.elements[0];
//      let pass = this.elements[1];

//      console.log(user.value);
//      console.log(pass.value);
// });



//***More Events***//
// let form = document.querySelector("form");

// form.addEventListener("change", function(event){   // change track bigchang
//     event.preventDefault();

//     let username = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
    
//     console.log("change Event");
//     console.log(username.value);
// });

// form.addEventListener("input", function(e){   // input track small & big 
//     e.preventDefault();

//     let username = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
    
//     console.log("Input Event");
//     console.log(username.value);
// });



/**Text Editor***///
    let inp = document.querySelector("#pas");

    let para = document.querySelector("#para");

    inp.addEventListener("input" , function(){

      const filteredValue = inp.value.replace(/[^a-zA-Z ]/g, "");
      
      inp.value = filteredValue;
      para.textContent = filteredValue;
    });