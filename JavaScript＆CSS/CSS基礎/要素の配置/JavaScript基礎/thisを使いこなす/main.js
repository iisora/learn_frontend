document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    ta.animate();
    ta2.animate();
    /* そのままanimateを呼び出したらthisにはid="btn"のDOMが渡ってしまうので、bindする */
    /* コールバック関数として渡す場合は上記のオブジェクトのメソッドとしての呼び出し方とは少し異なり
    関数は、オブジェクトを無視するので参照するのは直近のオブジェクトのbtnになる */
    btn.addEventListener('click', ta.animate.bind(ta));
    /* 上以外の方法として、無名関数で囲んで呼び出すという方法もある　*/
    /* この場合はanimateはtaというオブジェクトのメソッドとして扱われるので、taを参照する */
    btn.addEventListener('click', function() {
        ta.animate();
    });
});

/* thisは直近で囲まれているオブジェクトを参照する */
class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        
        // console.log(this) // TextAnimationを参照する

        // windowは省略可(グローバルメソッドなので)
        // window.setTimeout(function () {
        //     console.log(this); // (bindしない)windowを参照する→(bind)TextAnimationを参照
            this.el.classList.toggle('inview');
        // }.bind(this)); // thisをTextAnimationに束縛する
    }
}
