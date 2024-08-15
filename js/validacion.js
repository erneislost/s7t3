let alertSuccess = document.getElementById("alert-success");
let alertDanger = document.getElementById("alert-danger");

function showAlertSuccess() {
    alertSuccess.style = "display:block; opacity: 1";
}

function showAlertError() {
    alertDanger.style = "display:block; opacity: 1";
}

function closeAlert() {
    alertSuccess.style = "display:none";
    alertDanger.style = "display:none";
}

let regBtn = document.getElementById("regBtn");
let inputs = document.getElementsByTagName("input");

//Get inputs
let inputNombre = document.getElementById("nombre");
let inputApellido = document.getElementById("apellido");
let inputEmail = document.getElementById("email");
let inputPwd = document.getElementById("password1");
let inputPwd2 = document.getElementById("password2");
let checkbox = document.getElementById("terminos");

regBtn.addEventListener("click", function() {
    if((inputNombre.value.length > 0 && inputApellido.value.length > 0 && inputEmail.value.length > 0 && inputPwd.value.length > 5 && inputPwd2.value.length > 5) && (inputPwd.value === inputPwd2.value) && terminos.checked) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});