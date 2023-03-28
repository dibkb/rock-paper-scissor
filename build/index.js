"use strict";
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const body = document.querySelector("body");
const heading = document.querySelector("p.heading");
// ------------------------add eventlisteners------------------
let selectedItem;
rock.addEventListener("click", handleClick);
paper.addEventListener("click", handleClick);
scissor.addEventListener("click", handleClick);
function handleClick() {
    selectedItem = this;
    body.removeChild(body.children[0]);
    body.textContent = "";
    const weaponOne = selectedItem.id;
    const weaponTwo = computerWeapon();
    console.log(weaponOne, weaponTwo);
    // render winning page-accordingly
    renderWinningPage(weaponOne, weaponTwo);
}
function computerWeapon() {
    const score = (Math.floor(Math.random() * 3) + 1);
    switch (score) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
    }
}
function renderWinningPage(weaponOne, weaponTwo) {
    const result = document.createElement("section");
    result.setAttribute("class", "result");
    const userResult = renderResult(weaponOne, "user");
    const computerResult = renderResult(weaponTwo, "comp");
    result.appendChild(userResult);
    result.appendChild(computerResult);
    body.appendChild(result);
}
const renderResult = function (weapon, user) {
    const result = document.createElement("main");
    result.setAttribute("class", "user-result");
    const p = document.createElement("p");
    if (user === "comp") {
        p.innerHTML = "Computer Choose";
    }
    if (user === "user") {
        p.innerHTML = "You Choose";
    }
    const img = document.createElement("img");
    img.setAttribute("src", `../assets/${weapon}.png`);
    result.appendChild(p);
    result.appendChild(img);
    return result;
};
