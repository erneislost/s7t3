//Obtener divs de alertas
let alertSuccess = document.getElementById("alert-success");
let alertDanger = document.getElementById("alert-danger");

//Mostrar alerta correcta
function showAlertSuccess() {
    alertSuccess.style = "display:block; opacity: 1";
}

//Mostrar alerta error
function showAlertError() {
    alertDanger.style = "display:block; opacity: 1";
}

//Ocultar alerta/s
function closeAlert() {
    alertSuccess.style = "display:none";
    alertDanger.style = "display:none";
}

//Obtener botón
let regBtn = document.getElementById("regBtn");

//Get inputs
let inputNombre = document.getElementById("nombre");
let inputApellido = document.getElementById("apellido");
let inputEmail = document.getElementById("email");
let inputPwd = document.getElementById("password1");
let inputPwd2 = document.getElementById("password2");
let checkbox = document.getElementById("terminos");

//Manejador de evento click en el botón
regBtn.addEventListener("click", function() {
    if((inputNombre.value.length > 0 && inputApellido.value.length > 0 && inputEmail.value.length > 0 && inputPwd.value.length > 5 && inputPwd2.value.length > 5) && (inputPwd.value === inputPwd2.value) && terminos.checked) {
        //Mostrar alerta correcta cuando se cumplen los requisitos
        showAlertSuccess();
    } else {
        //Mostrar error cuando este no es el caso
        showAlertError();
    }
});