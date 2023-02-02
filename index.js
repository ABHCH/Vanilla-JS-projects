// DOM elemetns
const inputValue = document.getElementById("input-val");
const tipPercentageElem = document.querySelector(".tip-percent");
const tipValue = document.getElementById("tip-val");
const splitValue = document.getElementById("split-val");
const totalTipAmount = document.querySelector(".tip-amount");
const person = document.querySelector(".peoples");
const container = document.querySelector(".app-container");
const totalBillSec = document.querySelector(".total-bill");
const totalTipsec = document.querySelector(".total-tip");
const mainBalance = document.querySelector(".main-balance");

// app calucaltion
function update() {
  let billAmount = Number(inputValue.value);
  let tipPercentage = tipValue.value;
  let persons = splitValue.value;

  let tipAmount = (tipPercentage / 100) * billAmount;
  let eachBill = billAmount / persons;
  let eachtip = tipAmount / persons;
  let total = (billAmount + tipAmount) / persons;

  person.textContent = formatSplit(persons);
  tipPercentageElem.innerHTML = `${tipPercentage} %`;
  splitValue.textContent = `${persons}`;
  totalTipAmount.innerHTML = ` ₹ ${tipAmount}`;
  totalBillSec.textContent = `Total Bill: ₹ ${eachBill}`;
  totalTipsec.textContent = `Total Tip : ₹ ${eachtip}`;
  mainBalance.innerHTML = `₹ ${total}`;
}
function formatSplit(value) {
  if (value === "1") {
    return `${value} Person`;
  } else {
    return `${value} Peoples`;
  }
}

container.addEventListener("input", update);
