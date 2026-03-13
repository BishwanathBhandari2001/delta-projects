//**question 1**/
//mouseout event
let div = document.querySelector("div");
let p = document.querySelector("p");

div.addEventListener("mouseout", function(){
    div.style.backgroundColor= "red";
});


//keypress
let inp = document.querySelector("input");

let inps = inp.setAttribute("placeholder", "enter something");

inp.addEventListener("keypress", function(event){
    console.log(event.code);
    console.log(event.key);
})


//scroll
let scrol = document.querySelector("#scroll");
scrol.addEventListener("scroll", (event) => {
  console.log("Element scroll event fired!");
});

//load events
window.addEventListener("load", ()=>{
    console.log("page is fully reloaded");
});



//****question 2 
let btn = document.createElement("button");
let body = document.querySelector("body");

body.append(btn);

btn.innerText ="Click Me";
btn.addEventListener("click", ()=>{
    btn.style.backgroundColor= "green";
});




//question 3************
let inpu = document.createElement("input");
let h2 = document.createElement("h2");

body.append(inpu);
body.append(h2);

inpu.setAttribute("type", "text");
inpu.setAttribute("placeholder", "enter your name");

h2.innerText="This is H2 heading tag";

inpu.addEventListener( "input", (event)=>{   
    // Allow only letters and spaces 

    h2.textContent = inpu.value;
        
});