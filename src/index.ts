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
function handleClick(this: HTMLMediaElement, ev: MouseEvent): void {
  selectedItem = this;
  body.removeChild(body.children[0]);
  body.textContent = "";
  const weaponOne = selectedItem.id;
  const weaponTwo = computerWeapon();
  console.log(weaponOne, weaponTwo);
  // render winning page-accordingly
}
function computerWeapon(): "rock" | "paper" | "scissor" {
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
type scoreType = 1 | 2 | 3;
