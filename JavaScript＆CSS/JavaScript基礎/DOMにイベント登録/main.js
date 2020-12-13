const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

const changeColor = function() {
    // this.style.color = 'red';
    // console.log(this);
    btn.style.color =  'red';
}
function changeBgColor() {
    h1.style.backgroundColor = 'green';
}

/* htmlにonclickなどを書くのは非推奨なので以下を用いてイベントをハンドリングする */
btn.addEventListener('click', changeColor);
btn.addEventListener('mouseenter', changeColor);
btn,removeEventListener('mouseenter', changeColor);
btn.addEventListener('click', changeBgColor)

btn.onclick = changeBgColor

