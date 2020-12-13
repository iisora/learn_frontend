document.addEventListener('DOMContentLoaded', function () {
    /* インスタンス化 */
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 1000);
});

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    /* private method  クラスの中でしか呼ばないでください(開発者間の暗黙の了解)
    オブジェクト指向型の言語ではないのでJsでは担保されていない　*/
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        /* toggleはinviewがついている場合は削除し、ついていない場合は付与する */
        this.el.classList.toggle('inview');
    }
}
