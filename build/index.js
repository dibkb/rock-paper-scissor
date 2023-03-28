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
    body.textContent = "";
    const weaponOne = selectedItem.id;
    const weaponTwo = computerWeapon();
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
    const score = calculateWin(weaponOne, weaponTwo);
    result.appendChild(userResult);
    result.appendChild(computerResult);
    body.appendChild(result);
    body.appendChild(score);
}
const renderResult = function (weapon, user) {
    const result = document.createElement("main");
    result.setAttribute("class", `${user}-result`);
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
const calculateWin = function (user, comp) {
    const p = document.createElement("p");
    p.setAttribute("class", "score");
    if (user === comp) {
        p.innerHTML = result.DRAW;
        return p;
    }
    switch (user) {
        case "rock": {
            if (comp === "paper") {
                p.innerHTML = result.LOOSE;
                break;
            }
            else if (comp === "scissor") {
                p.innerHTML = result.WIN;
                break;
            }
        }
        case "paper": {
            if (comp === "scissor") {
                p.innerHTML = result.LOOSE;
                break;
            }
            else if (comp === "rock") {
                p.innerHTML = result.WIN;
                break;
            }
        }
        case "scissor": {
            if (comp === "rock") {
                p.innerHTML = result.LOOSE;
                break;
            }
            else if (comp === "paper") {
                p.innerHTML = result.WIN;
                break;
            }
        }
    }
    return p;
};
const result = {
    WIN: "You Win :)",
    LOOSE: "YOU LOOSE :(",
    DRAW: "It's a Draw :|",
};
