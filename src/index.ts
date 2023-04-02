const rock = document.getElementById("rock") as HTMLElement;
const paper = document.getElementById("paper") as HTMLElement;
const scissor = document.getElementById("scissor") as HTMLElement;
const body = document.querySelector("body") as HTMLBodyElement;
const heading = document.querySelector("p.heading") as HTMLParagraphElement;
// ------------------------add eventlisteners------------------
let selectedItem: HTMLElement;
rock.addEventListener("click", handleClick);
paper.addEventListener("click", handleClick);
scissor.addEventListener("click", handleClick);
function handleClick(this: HTMLElement): void {
  selectedItem = this;
  body.textContent = "";
  const weaponUser = selectedItem.id as weapon;
  const weaponComp = computerWeapon() as weapon;
  renderWinningPage(weaponUser, weaponComp);
}
function computerWeapon(): weapon {
  const score = (Math.floor(Math.random() * 3) + 1) as scoreType;
  switch (score) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
  }
}
function renderWinningPage(weaponUser: weapon, weaponComp: weapon) {
  const result = document.createElement("section");
  result.setAttribute("class", "result");
  const userResult = renderResult(weaponUser, "user");
  const computerResult = renderResult(weaponComp, "comp");
  const score = calculateWin(weaponUser, weaponComp);
  const button = addPlayAgainButton();
  result.appendChild(userResult);
  result.appendChild(computerResult);
  body.appendChild(result);
  body.appendChild(score);
  body.appendChild(button);
}
const renderResult: renderResultType = function (weapon, user) {
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
const calculateWin: calculateWinType = function (user, comp) {
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
      } else if (comp === "scissor") {
        p.innerHTML = result.WIN;
        break;
      }
    }
    case "paper": {
      if (comp === "scissor") {
        p.innerHTML = result.LOOSE;
        break;
      } else if (comp === "rock") {
        p.innerHTML = result.WIN;
        break;
      }
    }
    case "scissor": {
      if (comp === "rock") {
        p.innerHTML = result.LOOSE;
        break;
      } else if (comp === "paper") {
        p.innerHTML = result.WIN;
        break;
      }
    }
  }
  return p;
};
function addPlayAgainButton(): HTMLButtonElement {
  const button = document.createElement("button");
  button.innerHTML = "Play Again";
  button.setAttribute("class", "button");
  button.addEventListener("click", function () {
    window.location.reload();
  });
  return button;
}
const result: resultType = {
  WIN: "You Win :)",
  LOOSE: "YOU LOOSE :(",
  DRAW: "It's a Draw :|",
};
interface resultType {
  WIN: "You Win :)";
  LOOSE: "YOU LOOSE :(";
  DRAW: "It's a Draw :|";
}
type calculateWinType = (user: weapon, comp: weapon) => HTMLParagraphElement;
type renderResultType = (weapon: weapon, user: "user" | "comp") => HTMLElement;
type weapon = "rock" | "paper" | "scissor";
type scoreType = 1 | 2 | 3;
