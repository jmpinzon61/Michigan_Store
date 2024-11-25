const scrollContainers = document.querySelectorAll('.scroll-container');

scrollContainers.forEach((scrollContainer) => {
    let isDragging = false;
    let startX;
    let scrollStart;

    // Evento para cuando se presiona el puntero
    scrollContainer.addEventListener('pointerdown', (e) => {
        isDragging = true;
        scrollContainer.setPointerCapture(e.pointerId); // Captura el puntero
        startX = e.clientX; // Posición inicial del clic
        scrollStart = scrollContainer.scrollLeft; // Posición inicial del desplazamiento
        scrollContainer.style.cursor = 'grabbing'; // Cambia a cursor de arrastre
    });

    // Evento para cuando se mueve el puntero
    scrollContainer.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX; // Distancia movida desde el clic inicial
        scrollContainer.scrollLeft = scrollStart - dx; // Actualiza el desplazamiento
    });

    // Evento para cuando se suelta el puntero
    scrollContainer.addEventListener('pointerup', () => {
        isDragging = false;
        scrollContainer.style.cursor = 'grab'; // Regresa el cursor a modo de espera
    });

    // Evento para cuando el puntero es cancelado
    scrollContainer.addEventListener('pointercancel', () => {
        isDragging = false;
        scrollContainer.style.cursor = 'grab';
    });
});
