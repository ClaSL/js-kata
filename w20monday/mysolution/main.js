let box = document.querySelector("#alertdiv");

// 1. WHILE LOADING; WINDOW SLIDES IN

window.addEventListener("load",function(){
    box.style.transform =`translate(-40vh)`;


})




// 2. WHEN CLICK ON BUTTON, WINDOW SLIDES OUT AGAIN

//  addEventListener "click"



let button = document.querySelector("#button");

button.addEventListener("click",function(){
    box.style.transform =`translate(-100vw, -200vh)`;
   
});


// when the page loads, an element (div?) slides up/in containing the cookie notification
//When a button is pressed, it slides back out

