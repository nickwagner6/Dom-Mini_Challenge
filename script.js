"use strict"; //you cant do math on an object.

//1. Vending Machine --------------------------------------------------------------
const totalParagraph = document.querySelector(".total-paragraph");
const limeButton = document.querySelector(".lime");
let totalCounter = 0;
const vendingMachineButtons = document.querySelectorAll(".button");

vendingMachineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const amount = button.getAttribute("data-amount");
    //turning a string into a number below with parseInt
    totalCounter += parseInt(amount);
    totalParagraph.textContent = `Total: $${totalCounter}.00`;
  });
});
//-------------------------------------------------------------------------------------

//2. Make Money
const moneyForm = document.querySelector(".money-form");
const coinContainer = document.querySelector(".coin-container");

//the line below will stop the page from refreshing each time the button is clicked
moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const count = document.querySelector("#count").value;
  //this line below is referecning a string "type" from the html in the ()
  const type = document.querySelector("#type").value;
  for (let i = 0; i < count; i++) {
    const newCoin = document.createElement("div");
    //we just added a class to the div on the line above
    newCoin.classList.add("coin", type);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
      //   newCoin.style.display = "none";
    });
    coinContainer.append(newCoin);
  }
});

//-------------------------------------------------------------------------------------

//3. Light Bulb

const lightBulb = document.querySelector(".light-bulb");
const onSwitch = document.querySelector(".on");
const offSwitch = document.querySelector(".off");
const toggleSwitch = document.querySelector(".toggle");
const endSwitch = document.querySelector(".end");
const lightSwitches = document.querySelectorAll(".switch");

onSwitch.addEventListener("click", () => {
  lightBulb.classList.add("yellow");
});
offSwitch.addEventListener("click", () => {
  lightBulb.classList.remove("yellow");
});
toggleSwitch.addEventListener("click", () => {
  lightBulb.classList.toggle("yellow");
});
endSwitch.addEventListener("click", () => {
  lightBulb.remove();
  lightSwitches.forEach((item) => {
    console.dir(item);
    item.disabled = true;
  });
});
