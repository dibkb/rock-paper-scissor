"use strict";
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const body = document.querySelector("body");
const heading = document.querySelector("p.heading");
// add eventlisterns------------------
let selectedItem;
rock.addEventListener("click", handleClick);
paper.addEventListener("click", handleClick);
scissor.addEventListener("click", handleClick);
function handleClick(ev) {
    selectedItem = this;
    body.removeChild(body.children[0]);
    body.textContent = "";
    console.log(selectedItem);
    //   body?.removeChild(rock);
    //   body?.removeChild(paper);
    //   body?.removeChild(scissor);
    //   body?.removeChild(heading);
}
