
window.addEventListener("load", function() {
    // Retraso mínimo de 6 segundos antes de ocultar el loader
    setTimeout(function() {
        // Oculta el loader
        document.getElementById("loader").classList.add("hide");
        document.getElementById("mainContent").style.display = "block";
    }, 6000); 
});
