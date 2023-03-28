const rock = document.getElementById("rock") as HTMLMediaElement;
const paper = document.getElementById("paper") as HTMLMediaElement;
const scissor = document.getElementById("scissor") as HTMLMediaElement;
const body = document.querySelector("body") as HTMLBodyElement;
const heading = document.querySelector("p.heading") as HTMLParagraphElement;
// ------------------------add eventlisteners------------------
let selectedItem: HTMLMediaElement;
rock.addEventListener("click", handleClick);
paper.addEventListener("click", handleClick);
scissor.addEventListener("click", handleClick);
function handleClick(this: HTMLMediaElement): void {
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
  const userResult = document.createElement("main");
  userResult.setAttribute("class", "user-result");
  userResult.innerHTML = weaponOne;
  const computerResult = document.createElement("main");
  computerResult.setAttribute("class", "comp-result");
  computerResult.innerHTML = weaponTwo;
  result.appendChild(userResult);
  result.appendChild(computerResult);
  body.appendChild(result);
}
type weapon = "rock" | "paper" | "scissor";
type scoreType = 1 | 2 | 3;
