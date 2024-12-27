const scrollContainers = document.querySelectorAll('.scroll-container');

scrollContainers.forEach((scrollContainer) => {
    let isDragging = false;
    let startX;
    let scrollStart;

    scrollContainer.addEventListener('pointerdown', (e) => {
        isDragging = true;
        scrollContainer.setPointerCapture(e.pointerId);
        startX = e.clientX;
        scrollStart = scrollContainer.scrollLeft;
        scrollContainer.style.cursor = 'grabbing';
    });

    scrollContainer.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        scrollContainer.scrollLeft = scrollStart - dx;
    });


    scrollContainer.addEventListener('pointerup', () => {
        isDragging = false;
        scrollContainer.style.cursor = 'grab'; 
    });


    scrollContainer.addEventListener('pointercancel', () => {
        isDragging = false;
        scrollContainer.style.cursor = 'grab';
    });
    
});
