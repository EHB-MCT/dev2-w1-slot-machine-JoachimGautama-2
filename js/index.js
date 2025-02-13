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
  let slots = "";
  for (let i = 0; i < slotMachine.slots.length; i++) {
    slots += `<span class='${slotMachine.symbols[slotMachine.slots[i]]}'>${
      slotMachine.symbols[slotMachine.slots[i]]
    }</span>`;
  }
  document.getElementById("result").innerHTML = slots;
}

function showGameResult() {
  slotMachine.calculateStatus();
  let msg;
  if (slotMachine.win) {
    msg = "you win";
  } else {
    msg = "you lose";
  }
  document.getElementById("status").innerHTML = msg;
  // TODO: show a win or lose message in HTML
}

init();
