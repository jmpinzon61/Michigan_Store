const container = document.getElementById('videos-container');

let isDragging = false;
let startX;
let scrollLeft;


container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.offsetLeft;
    container.style.cursor = 'grabbing';
});

container.addEventListener('mousemove', (e)=> {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
});

container.addEventListener('mouseup', ()=> {
    isDragging = false;
    container.style.cursor = 'grab';
});

container.addEventListener('mouseleave', ()=> {
    isDragging = false;
    container.style.cursor = 'grab';
});