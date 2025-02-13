import { slotMachine } from "./slotMachine.js";

function init() {
  document
    .getElementById("button")
    .addEventListener("click", () => pullLever());
}

function pullLever() {
  console.log("lever bitch!");
  // TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
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
  // TODO: show the slot symbols in HTML
}

function showGameResult() {
  console.log("noGame");
  // TODO: show a win or lose message in HTML
}

init();
