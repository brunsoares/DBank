import { dbank } from '../../declarations/dbank';

window.addEventListener("load", async function(){
  loadCurrentValue();
});

document.querySelector("form").addEventListener("submit", async function(event){
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  const inputTopUp = parseFloat(document.getElementById("input-amount").value);
  const inputWithdraw = parseFloat(document.getElementById("withdraw-amount").value);

  button.setAttribute("disabled", true);
  
  if(!isNaN(inputTopUp)){
    await dbank.incrementValue(inputTopUp);
  } 

  if(!isNaN(inputWithdraw)){
    await dbank.decrementValue(inputWithdraw);
  }

  await dbank.calculateFees();
  
  loadCurrentValue();
  button.removeAttribute("disabled");
  clearFields();
  
});

async function loadCurrentValue(){
  const currentValue = await dbank.checkCurrentValueWallet();
  document.getElementById("value").innerText = currentValue.toFixed(2);
}

function clearFields(){
  document.getElementById("input-amount").value = "";
  document.getElementById("withdraw-amount").value = "";
}