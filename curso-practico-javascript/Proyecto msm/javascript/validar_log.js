function signin() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let error = document.getElementById("error");

  if (email.value == "" || password.value == "") {
    email.style.boxShadow = password.style.boxShadow = "inset 0 0 4px red";
    error.innerHTML = "Ingrese el email y la contraseña!";
    error.classList.toggle("error-red");
  } else if (password.value.length < 8) {
    email.style.boxShadow = password.style.boxShadow = "inset 0 0 4px red";
    error.innerHTML = "La contraseña deve ser de mas de 8 caracteres!";
    error.classList.toggle("error-red");
    email.value = "";
  } else if (
    email.value.includes("@") & email.value.includes(".com") ||
    email.value.includes(".COM")
  ) {
    email.style.boxShadow = password.style.boxShadow = "inset 0 0 4px #009900";
    error.innerHTML = "Bienvenido a MSM-WEBSITE!";
    error.classList.toggle("error-green");
    location.href = "./index.html";
  } else {
    email.style.boxShadow = password.style.boxShadow = "inset 0 0 4px red";
    error.innerHTML =
      "El correo deve contar con '@'  y  '.com' para ser valido!";
    error.classList.toggle("error-red");
    password.value = "";
    email.value = "";
  }
}

function showregisterform() {

  let email = document.getElementById("email_reg");
  let password = document.getElementById("password_reg");
  let error = document.getElementById("error_reg");
  let name = document.getElementById("name");
  let surname = document.getElementById("surname");

  error.classList.toggle("error-black");
      email.style.boxShadow =
        password_reg.style.boxShadow =
        name.style.boxShadow =
        surname.style.boxShadow =
          "inset 0 0 4px black";

      name.value = "";
      surname.value = "";
      email.value = "";
      password.value = "";
      error.innerHTML = "Cree su cuenta!";
      error.style.background = "transparent";


  document.getElementById("login-register").style.display = "";
  document.getElementById("registerForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("policy").style.display = "none";
}

function showloginform() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";

  document.getElementById("policy").style.display = "none";
}

function policy() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("policy").style.display = "block";
  document.getElementById("login-register").style.display = "none";
}
function reset_key() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let error = document.getElementById("error");

  if (email.value == "" || password.value == "") {
    email.style.boxShadow = password.style.boxShadow = "inset 0 0 4px red";
    error.innerHTML = "Ingrese el email y la contraseña!";
    error.classList.toggle("error-red");
  } else if (password.value.length < 8) {
    email.style.boxShadow = password.style.boxShadow = "inset 0 0 4px red";
    error.innerHTML = "La contraseña deve ser de mas de 8 caracteres!";
    error.classList.toggle("error-red");
    password.value = "";
  } else if (
    email.value.includes("@") & email.value.includes(".com") ||
    email.value.includes(".COM")
  ) {
    email.style.boxShadow = password.style.boxShadow = "inset 0 0 4px #009900";
    error.innerHTML = "CONTRASEÑA REESTABLECIDA CON EXITO!";
    error.classList.toggle("error-green");
    alert("La contraseña reestablecida se enviara al correo ingresado!");
    location.href = "./login_register.html";
  } else {
    email.style.boxShadow = password.style.boxShadow = "inset 0 0 4px red";
    error.innerHTML =
      "El correo deve contar con '@'  y  '.com' para ser valido!";
    error.classList.toggle("error-red");
    password.value = "";
    email.value = "";
  }
}

function register() {
  let email = document.getElementById("email_reg");
  let password = document.getElementById("password_reg");
  let error = document.getElementById("error_reg");
  let name = document.getElementById("name");
  let surname = document.getElementById("surname");

  email.style.boxShadow =
    password_reg.style.boxShadow =
    name.style.boxShadow =
    surname.style.boxShadow =
      "inset 0 0 4px transparent";

  if (
    (email.value == "") &
    (password.value == "") &
    (name.value == "") &
    (surname.value == "")
  ) {
    email.style.boxShadow =
      password_reg.style.boxShadow =
      name.style.boxShadow =
      surname.style.boxShadow =
        "inset 0 0 4px red";
    error.innerHTML = "Se deven llenar todos los campos!";
    error.classList.toggle("error-red");
  } else if (name.value == "") {
    name.style.boxShadow = "inset 0 0 4px red";
    error.innerHTML = "Se deven llenar  todos los campos!";
    error.classList.toggle("error-red");
  } else if (name.value != "") {
    name.style.boxShadow = "inset 0 0 4px #009900";
    name.style.boxShadow = "inset 0 0 4px green";
  }
  if (surname.value == "") {
    surname.style.boxShadow = "inset 0 0 4px red";
    error.innerHTML = "Se deven llenar  todos los campos!";
    error.classList.toggle("error-red");
  } else if (surname.value != "") {
    surname.style.boxShadow = "inset 0 0 4px #009900";
    surname.style.boxShadow = "inset 0 0 4px green";
  } else if (email.value == "") {
    email.style.boxShadow = "inset 0 0 4px red";
    error.innerHTML = "Se deven llenar  todos los campos!";
    error.classList.toggle("error-red");
  } if (email.value.includes("@") & email.value.includes(".com") ||												
    email.value.includes(".COM")
  ) {
    email.style.boxShadow = "inset 0 0 4px #009900";
    email.style.boxShadow = "inset 0 0 4px green";
    if (password.value == "" || password.value.length < 8 ) {
      password.style.boxShadow = "inset 0 0 4px red";
      error.innerHTML = "La contraseña deve ser de mas de 8 caracteres!";
      error.classList.toggle("error-red");
      password.value = "";
    } else if (name.value=="" ) {
      name.style.boxShadow = "inset 0 0 4px red";
      error.innerHTML = "Se deven llenar  todos los campos!";
      error.classList.toggle("error-red");
    }else if (surname.value=="") {
      surname.style.boxShadow = "inset 0 0 4px red";
      error.innerHTML = "Se deven llenar  todos los campos!";
      error.classList.toggle("error-red");
    }else if (password.value.length >= 8 & 
      name.value=="" || surname.value=="" ) {
      password.style.boxShadow = "inset 0 0 4px green";
    }else{
      email.style.boxShadow = password.style.boxShadow =
        "inset 0 0 4px #009900";
      error.innerHTML = "Cuenta creada con exito!";
      error.classList.toggle("error-green");
      email.style.boxShadow =
        password.style.boxShadow =
        name.style.boxShadow =
        surname.style.boxShadow =
          "inset 0 0 4px green";
        alert(
          "La contraseña de la cuenta creada  se enviara al correo registrado!"
        );
      showloginform();

      
    }
  } else if (email.value=="") {
    email.style.boxShadow = "inset 0 0 4px red";
    error.innerHTML =
      "Se  deven llenar  todos los campos!";
    error.classList.toggle("error-red");
  }else{
    email.style.boxShadow = "inset 0 0 4px red";
    // password.style.boxShadow = "inset 0 0 4px red";
    error.innerHTML =
      "El correo deve contar con '@'  y  '.com' para ser valido!";
    error.classList.toggle("error-red");
  }

}
