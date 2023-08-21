/*const buy= document.querySelector("#buy_btn");
buy.addEventListener("click", popup);

function popup() {

}*/

let element = document.getElementById("subscribe");
let lottie = document.getElementById("lottie");
element.addEventListener("click", shrink);
function shrink() {
  element.classList.add("subBtnAnn");
  // lottie.classList.add("lottie");
  lottie.style.display="block";
}
