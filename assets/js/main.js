const inputOne = document.querySelector(".inputOne");
const inputTwo = document.querySelector(".inputTwo");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const delenBtn = document.querySelector(".delen");
const umnoshBtn = document.querySelector(".umnosh");
const resultBtn = document.querySelector(".resultBtn");
const resultElement = document.querySelector(".result");

let action = "+";

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

delenBtn.onclick = function () {
  action = "/";
};

umnoshBtn.onclick = function () {
  action = "*";
};


resultBtn.onclick = function () {
  if (action === "+") {
    const sum = Number(inputOne.value) + Number(inputTwo.value);
    resultElement.textContent = sum;
  } if(action === "-"){
    const sum = Number(inputOne.value) - Number(inputTwo.value);
    resultElement.textContent = sum;
  }  if(action === "/"){
    const sum = Number(inputOne.value) / Number(inputTwo.value);
    resultElement.textContent = sum;
  }if(action === "*"){
    const sum = Number(inputOne.value) * Number(inputTwo.value);
    resultElement.textContent = sum;
  }
  
};
