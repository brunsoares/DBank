import { dbank } from '../../declarations/dbank';

window.addEventListener("load", async function(){
  loadCurrentValue();
});

document.querySelector("form").addEventListener("submit", async function(event){
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  const inputTopUp = parseFloat(document.getElementById("input-amount").value);
  const inputWithdraw = parseFloat(document.getElementById("withdraw-amount").value);

  console.log(inputTopUp)
  console.log(inputWithdraw)

  button.setAttribute("disabled", true);
  
  if(inputTopUp != NaN){
    await dbank.incrementValue(inputTopUp);
  } else {
    console.log("eh ruim")
  }
  if(inputWithdraw != NaN){
    await dbank.decrementValue(inputWithdraw);
  }

  await dbank.calculateFees();
  
  clearFields();
  button.removeAttribute("disabled");
  loadCurrentValue();
  
});

async function loadCurrentValue(){
  const currentValue = await dbank.checkCurrentValueWallet();
  document.getElementById("value").innerText = currentValue.toFixed(2);
}

function clearFields(){
  document.getElementById("input-amount").value = "";
  document.getElementById("withdraw-amount").value = "";
}