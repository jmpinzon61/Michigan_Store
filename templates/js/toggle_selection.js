function toggleSelection(element) {
    const isSelected = element.classList.contains("selected");

    
    if (isSelected) {
        element.classList.remove("selected");
        const img = element.querySelector(".toggle-image");
        img.src = "./imagenes/ring.png"; 
    } else {
        element.classList.add("selected");
        const img = element.querySelector(".toggle-image");
        img.src = "./imagenes/check.png";
    }
}
