const rock = document.getElementById("rock") as HTMLMediaElement;
const paper = document.getElementById("paper") as HTMLMediaElement;
const scissor = document.getElementById("scissor") as HTMLMediaElement;
const body = document.querySelector("body") as HTMLBodyElement;
const heading = document.querySelector("p.heading") as HTMLParagraphElement;
// add eventlisterns------------------
let selectedItem: HTMLMediaElement;
rock.addEventListener("click", handleClick);
paper.addEventListener("click", handleClick);
scissor.addEventListener("click", handleClick);
function handleClick(this: HTMLMediaElement, ev: MouseEvent): void {
  selectedItem = this;
  body.removeChild(body.children[0]);
  body.textContent = "";
  console.log(selectedItem);
  //   body?.removeChild(rock);
  //   body?.removeChild(paper);
  //   body?.removeChild(scissor);
  //   body?.removeChild(heading);
}
