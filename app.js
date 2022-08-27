let btnSorpresa = document.getElementById("btn-sorpresa");
btnSorpresa.addEventListener("click", mensaje)

function mensaje(){
    let mensaje_js = document.getElementById("mensaje");
    mensaje_js.innerHTML = "Felicidades Has subido a nivel 18";
}