const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    console.log(accu, curr);
    return `${accu}<${curr}>`;
}

function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;
    for(let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        /* tagの戻り値をaccuに蓄積している */
        accu = callback(accu, curr);
    }

    return accu;

}

const result = reduce(strArry, tag, "");
console.log(result);