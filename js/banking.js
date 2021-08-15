const currentBalance = document.getElementById("current-balance");
const totalDeposit = document.getElementById("total-deposit");
const totalWithdraw = document.getElementById("total-withdraw");
const widthdrawInput = document.getElementById("withdraw-input");
const depositInput = document.getElementById("deposit-input");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("widthdraw-btn");

depositBtn.addEventListener("click", function () {
  totalDeposit.innerText =
    parseInt(totalDeposit.innerText) + parseInt(depositInput.value);
  currentBalance.innerText =
    parseInt(totalDeposit.innerText) + parseInt(depositInput.value);
  depositInput.value = "";
});

withdrawBtn.addEventListener("click", function () {
  totalWithdraw.innerText =
    parseFloat(totalWithdraw.innerText) + parseFloat(widthdrawInput.value);
  currentBalance.innerText =
    parseFloat(currentBalance.innerText) - parseFloat(widthdrawInput.value);
  widthdrawInput.value = "";
});
