window.addEventListener('resize', function () {

    // asd
    let width = window.innerWidth;
    let height = window.innerHeight;
    let sizeInfo = document.querySelector('#sizeInfo');
    sizeInfo.innerHTML = '<h1>Width: ' + width + ' Height: ' + height + '</h1>';
});