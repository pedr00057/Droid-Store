document.getElementById("Contacto").addEventListener("submit", function (event) {
    event.preventDefault();
    showConfirmation();
    this.reset();
});

function showConfirmation() {
    email = document.getElementById("email").value;
    asunto = document.getElementById("subject").value;
    texto = document.getElementById("message").value;
    if (email == null || email.length == 0 || /^\s+$/.test(email)
        && asunto == null || asunto.length == 0 || /^\s+$/.test(asunto)
        && texto == null || texto.length == 0 || /^\s+$/.test(texto)) {
        return false;
    } else {
        document.getElementById("Yandel").style.display = "flex";
        document.getElementById("Contacto").style.display = "none";
    }
}
function resetForm() {
    document.getElementById("Contacto").style.display = "flex";
    document.getElementById("Yandel").style.display = "none";
    
}