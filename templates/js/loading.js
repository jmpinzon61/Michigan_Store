// // Espera a que toda la página se cargue
window.addEventListener("load", function() {
    // Retraso mínimo de 4 segundos antes de ocultar el loader
    setTimeout(function() {
        // Oculta el loader
        document.getElementById("loader").classList.add("hide");
        // Muestra el contenido principal
        document.getElementById("mainContent").style.display = "block";
    }, 6000); // milisegundos
});
