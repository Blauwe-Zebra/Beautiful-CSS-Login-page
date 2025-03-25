function Login() {
  document.getElementById("Login").style.display = "none";
  document.getElementById("SignUp").style.display = "flex";
}

function SignUp() {
  document.getElementById("SignUp").style.display = "none";
  document.getElementById("Login").style.display = "flex";
}

function Showpwd() {
  document.getElementById("ShowPwdBtn").classList.toggle("fa-eye-slash");

  if (
    document.getElementById("ShowPwdBtn").classList.toggle("fa-eye") == true
  ) {
    document.getElementById("Password").type = "text";
  } else {
    document.getElementById("Password").type = "password";
  }
}
