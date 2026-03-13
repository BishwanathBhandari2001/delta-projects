//question 1
let input = document.createElement('input');
let button = document.createElement('button');

button.innerText= "Click me";

document.querySelector('body').append(input);
document.querySelector('body').append(button);


//question 2
let id = button.setAttribute('id', 'btn');

let placeholder = input.setAttribute('placeholder', 'username');



//question 3 
let btns = document.querySelector('#btn');
btns.classList.add('btnStyle');

//question 4 
let h1= document.createElement('h1');

document.querySelector('body').append(h1);
h1.innerText= "DOM Practice";
// h1.innerHTML="<u>DOM Practice</u>"

let underline = h1.classList.add('underline');
// let color = h1.classList.add('color');
// h1.style.color="purple";


//question 5
let p = document.createElement('p');
document.querySelector('body').prepend(p);
p.innerHTML = "Apna College <b>Delta </b> Practice";


