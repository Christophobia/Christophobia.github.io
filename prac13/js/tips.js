function writeCopy() {
  let d = new Date();
  let el = document.querySelector("#copy");
  el.innerHTML = 'Copyright © ' + d.getFullYear();
}

document.addEventListener('DOMContentLoaded', writeCopy);


// fields
//target all the input fields to constants 
const bill = document.querySelector("#bill");
const numPeople = document.querySelector("#numPeople");
const tip = document.querySelector("#tip");

// elements
//target all the display output to constants 
const amt = document.querySelector("#amt");
const ttp = document.querySelector("#ttp");
const app = document.querySelector("#app");

// listeners when fields change
const inputColl = document.querySelectorAll("input"); //todo
for (let item of inputColl) { // loop each item
  item.addEventListener("change", doCalculate);
}

// 
function doCalculate() {
  alert("some change");
  // let totalTips = (1.0 * bill.value) * (1.0 * tip.value) * 0.01;
  // let totalAmount = //todo
  // let amountPerPerson = //todo
  
  // amt.innerHTML = totalAmount;
  // ttp.innerHTML = //todo
  // app.innerHTML = //todo
}