const arry = [1,2,3,4,5];

// 引数にコールバック関数
/* reduce: 第一= 配列の前の要素 */
arry.reduce(
    function(accu, curr) {
    console.log(accu, curr);
    // return accu * curr;
}, 10);

const str = 'animation';
/* animationという文字列が配列に変えて変数に格納する */
const strArry = str.split('');

console.log(strArry);

/* returnの文字列が次にaccuに入ってくる */
const result = strArry.reduce((accu, curr) => {
    /* accuにどんどん文字列を追加していく */
    // return accu + '<' + curr + '>';
    return `${accu}<${curr}>`; // テンプレートリテラル
}, "") // acuuの初期値

console.log(result);