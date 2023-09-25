//EVENT LISTENER
// // // let button = document.getElementById('button');
/*
button.addEventListener('click' ,function() {
    console.log('Clicked On Button Successfully');
})
*/

// // // button.addEventListener('click' , buttonClicked);

/*
function buttonClicked(){
    //console.log('Button Clicked');
    document.getElementById('header-title').textContent = 'CHANGED';
    document.querySelector('#main').style.backgroundColor = 'blue';
}
*/

/*
function buttonClicked(e){
    //console.log(e);
    console.log(e.target);   // returns "whatever element the event is fired from."
    console.log(e.target.id);
    console.log(e.target.className);  //returns "whole string of all the classes."
    console.log(e.target.classList);  //returns "DOMTokenList -> an array of the classes."
    let output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';
    console.log(e.type);
}
*/

/*
function buttonClicked(e){
    //console.log(e.clientX);
    //console.log(e.clientY);
    console.log(e.altKey);       // (alt + click) gives true.
    console.log(e.ctrlKey);      // (ctrl + click) gives true.
    console.log(e.shiftKey);     // (shift + click) gives true.
}
*/

/*
function runEvent(e){
    console.log('EVENT TYPE: ' +e.type);

    document.body.style.background = "rgb("+e.offsetX+","+e.offsetY+",40)";
}
*/


// //let button = document.getElementById('button');
// //let box = document.getElementById('box');

/*
button.addEventListener('click' , runEvent);
button.addEventListener('dblclick' , runEvent);
button.addEventListener('mouseup' , runEvent);
button.addEventListener('mousedown' , runEvent);
*/


/*
box.addEventListener('mouseenter' , runEvent);    //It is for the element itself not for the inner Element.
box.addEventListener('mouseleave' , runEvent);  //It is for the element itself not for the inner Element.

box.addEventListener('mouseover' , runEvent);   //It is for inner Element too.
box.addEventListener('mouseout' , runEvent);    //It is for inner Element too.

box.addEventListener('mousemove' , runEvent);
*/

function runEvent(e){
    console.log('EVENT TYPE: ' +e.type);
    console.log(e.target.value);
}

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

// //itemInput.addEventListener('keydown' , runEvent);
// //itemInput.addEventListener('keyup' , runEvent);
// //itemInput.addEventListener('keypress' , runEvent);

itemInput.addEventListener('focus' , runEvent);    // click inside on input
itemInput.addEventListener('blur' , runEvent);     //click outside on input