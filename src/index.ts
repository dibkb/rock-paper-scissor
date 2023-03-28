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
  body.removeChild(body.children[0]);
  body.textContent = "";
  const weaponOne = selectedItem.id as weapon;
  const weaponTwo = computerWeapon() as weapon;
  console.log(weaponOne, weaponTwo);
  // render winning page-accordingly
  renderWinningPage(weaponOne, weaponTwo);
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
function renderWinningPage(weaponOne: weapon, weaponTwo: weapon) {
  const result = document.createElement("section");
  result.setAttribute("class", "result");
  const userResult = renderResult(weaponOne, "user");
  const computerResult = renderResult(weaponTwo, "comp");
  result.appendChild(userResult);
  result.appendChild(computerResult);
  body.appendChild(result);
}
const renderResult: renderResultType = function (weapon, user) {
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
type renderResultType = (weapon: weapon, user: "user" | "comp") => HTMLElement;
type weapon = "rock" | "paper" | "scissor";
type scoreType = 1 | 2 | 3;
