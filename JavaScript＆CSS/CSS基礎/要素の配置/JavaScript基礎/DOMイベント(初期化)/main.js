


// const dcl = document.querySelector('.dcl');
// const load = document.querySelector('.load');

/* こっちはwindowに対しても付与できる */
document.addEventListener("DOMContentLoaded", function () {
    // dcl.classList.add('done');
    const h1 = document.querySelector('h1');
    h1.style.color = 'red';
});

/* こっちはdocumentに登録できない */
window.addEventListener("load", function () {
    // load.classList.add('done');
    const h1 = document.querySelector('h1');
    h1.style.color = 'red';
});