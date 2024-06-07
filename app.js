let title = document.querySelector(".title");
let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let signBtn = document.querySelector(".sign-btn");
let phone = document.querySelector(".phone");
let password = document.querySelector(".password");
let userName = document.querySelector(".userName");
let signIn = document.getElementById("signIn");
let signUp = document.getElementById("signUp");
let forgotContainer = document.querySelector(".forgot_container");
signIn.addEventListener("click", () => {
  title.innerHTML = "ورود";
  signBtn.innerHTML = "ورود";
  forgotContainer.style.display = "block";
  userName.style.display = "none";
  phone.style.display = "none";
  signUp.style.display = "flex";
  signIn.style.display = "none";
});
signUp.addEventListener("click", () => {
  title.innerHTML = "عضویت";
  signBtn.innerHTML = "ثبت نام";
  userName.style.display = "flex";
  phone.style.display = "flex";
  signUp.style.display = "none";
  signIn.style.display = "flex";
  forgotContainer.style.display = "none";
});
