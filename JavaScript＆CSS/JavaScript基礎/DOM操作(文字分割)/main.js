document.addEventListener('DOMContentLoaded', function() {
    const el = document.querySelector('.animate-title');
    const str = el.innerHTML.trim().split(""); // trimで前後の余計なスペースを削除する
    // const concatStr = '';
    // let concatStr = '';

    for(let c of str) {
        // c = c.replace(' ', '&nbsp'); 
        // c = c.replace(/\s+/, '&nbsp;'); // 正規表現で半角スペースを指定
        /* バックティックでテンプレートリテラルで文字列を整形 */
        // concatStr = concatStr + `<span class="char">${c}</span>`;
        // concatStr += `<span class="char">${c}</span>`;
    }

    /* innerHTMLはDOMへのアクセスなのでループの中に入れるとパフォーマンスが落ちる */
    /* reduceを使うと用途がわかるので、大規模なプロジェクトでは他の人に意図を伝えやすい */
    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`
    }, "");
});
