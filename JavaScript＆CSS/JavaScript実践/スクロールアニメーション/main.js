/* 複数取得の場合はquerySelectorAll */
const child = document.querySelector('.child');

const cb = function(entries, observer) {
    /* テンプレ、この場合一つのclassしか入れてないが、複数入る場合があるため配列 */
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            /* 交差点の要素はentry.targetで確認できる */
            entry.target.classList.add('inview');
        } else {
            entry.target.classList.remove('inview');
        }
    });
}

const options = {
    //基準の要素。デフォルトはブラウザ画面。
    root: null,
    //交差を計算する際は、実際は基準要素の領域にここで指定した余白値を足した領域が計算基準となる。
    rootMargin: "-300px 0px",
    //コールバックを実行する交差の閾値リスト。交差の割合が閾値を上回るか下回ったときのみコールバック関数が実行される。
    //この場合見えている割合が0％および50％を100%上回るか下回ったときにコールバックが実行される。
    threshold: [0, 0.5, 1]
};

const io = new IntersectionObserver(cb, options);
/* 監視開始 */
io.observe(child);

/* 補足
entriesは、
交差オブジェクトの配列。配列になっているのは、
先ほどの observe メソッドを複数回呼び出せば複数の要素を監視できるため。
つまり監視対象ごとの交差オブジェクトが入った配列。
このオブジェクトから交差の割合などの情報を引き出せる。

*/