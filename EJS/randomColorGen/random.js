let h1 = document.querySelector('h1');

let btn = document.querySelector("button");

let div = document.querySelector("div");

btn.addEventListener("click", function(){
    let randomcolor= generateRandom();
    h1.innerText = randomcolor;
});

btn.addEventListener("click", function (){
    div.style.backgroundColor=generateRandom();
})

function generateRandom(){

    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red} , ${green} , ${blue} )`;
    return color;

}



//next lesson code
let p = document.querySelector("p");

p.addEventListener("click", function(){
    p.innerHTML= "<b>AddEventListener Performed</b>";
    p.style.color="red";

});

let box = document.querySelector('.box');

box.addEventListener("click", function(){
    box.style.backgroundColor="green";
});

box.addEventListener("dblclick", function(){
    box.style.backgroundColor="red";
});

box.addEventListener("mouseenter", function(){
    box.style.backgroundColor="aqua";
});