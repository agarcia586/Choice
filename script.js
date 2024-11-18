let left =document.querySelector('.left');
let right =document.querySelector('.right');
let leftRight =document.querySelector('.leftRight');
let text =document.querySelector('p');

let pizza =document.querySelector('.pizza');
pizza.style.display='none';


left.addEventListener('click',function() {

    leftRight.style.display="none";
    left.style.display="none";
    right.style.display="none";

    pizza.style.display='block';

    text.innerHTML="click to eat";
});

pizza.addEventListener('dblclick',function() {

    text.innerHTML="yummmm";
});
