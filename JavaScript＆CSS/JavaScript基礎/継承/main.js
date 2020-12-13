document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TweenTextAnimation('.tween-animate-title');
    ta.animate();
    // btn.addEventListener('click', ta.animate.bind(ta));
});


class TextAnimation {
    constructor(el) {
        /* 全てのDOM要素をDOMというオブジェクトに格納するとコードが見やすくなる */
        this.DOM = {};
        this.DOM.el = document.querySelector(el);
        /* これはDOMではないと一目瞭然になる */
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}

class TweenTextAnimation extends TextAnimation{
    constructor(el) {
        /* 親のコンストラクタを呼び出す */
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char')
    }

    animate() {
        this.DOM.el.classList.add('inview');
        /* 第一引数：DOM、　第二引数：インクリメント */
        this.DOM.chars.forEach((c, i) => {
            TweenMax.to(c, .6, {
                /* イージングファンクション */
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0},
                y: '0%',
                opacity: 1
            });
        });
        // this.DOM.el.classList.toggle('inview');
        /* 親のメソッドを書き換える=オーバーライド */
        console.log('override')
    }
}