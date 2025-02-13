import { slotMachine } from "./slotMachine.js";

function init() {
  document
    .getElementById("button")
    .addEventListener("click", () => pullLever());
}

function pullLever() {
  console.log("lever bitch!");
  slotMachine.reset();
  slotMachine.spin();
  showSlots();
  showGameResult();
}

function showSlots() {
  console.log("yup");
  let slots = "";
  for (let i = 0; i < slotMachine.slots.length; i++) {
    slots += `<span class='${slotMachine.symbols[slotMachine.slots[i]]}'>${
      slotMachine.symbols[slotMachine.slots[i]]
    }</span>`;
  }
  document.getElementById("result").innerHTML = slots;
}

function showGameResult() {
  console.log("noGame");
  //   if(!win){
  // show lose}
  // TODO: show a win or lose message in HTML
}

init();
