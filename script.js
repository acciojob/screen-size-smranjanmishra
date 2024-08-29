// Function to update the size information
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeInfo = document.querySelector('#sizeInfo h1');
    sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
}

// Update size on page load
updateSize();

// Update size when the window is resized
window.addEventListener('resize', updateSize);