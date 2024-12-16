document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {
        document.getElementById("loader").classList.add("hide");
        document.getElementById("mainContent").style.display = "block";
    }, 6000);

    
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const email = form.querySelector("input[type='email']").value;
        const password = form.querySelector("input[type='password']").value;

      
        if (email && password) {
            console.log("Formulario enviado:", { email, password });
            window.location.href = "../inicio.html";
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});
