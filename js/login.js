const btn = document.getElementById("submit-btn");
const email = document.getElementById("email-input");
const password = document.getElementById("password-input");

btn.addEventListener("click", () => {
  if (email.value == "fakemail@gmail.com" && password.value == "secret") {
    window.location.href = "banking.html";
  } else {
    alert("password or email is incorrect");
  }
});
