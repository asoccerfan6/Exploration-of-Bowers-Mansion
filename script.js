/* Declare variables below to save the different sections (divs) of your story*/
let op2 = document.querySelector(".option-two");
let screen1 = document.querySelector(".option-one-screen");
let screen2 = document.querySelector(".option-two-screen");
let end1 = document.querySelector(".option-one-end");
let end2 = document.querySelector(".option-two-end");
let title = document.querySelector(".title");
let opening = document.querySelector(".story-opening");

let op1 = document.querySelector(".option-one");
let buttons = document.querySelector(".buttons");
let run = document.querySelector(".option-run");
let stay = document.querySelector(".option-stay");
let h1 = document.querySelector("h1");




/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
op1.onclick = function() {
    opening.style.display = "none";
    op1.style.display = "none";
    op2.style.display = "none";
    screen1.style.display = "block";
};




/* */
op2.onclick = function() {
    opening.style.display = "none";
    screen2.style.display = "block";
    op2.style.display = "none";
    op1.style.display = "none";

};

run.onclick = function(){
	screen1.style.display = "none";
	end2.style.display = "block";
    };

stay.onclick=function(){
    screen1.style.display = "none";
    end1.style.display = "block";
    h1.innerhtml = "You choose to stay";
};